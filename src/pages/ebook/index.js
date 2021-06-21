import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import ViewPage from "./detailView";
import CreateBook from "./createBook";

const Ebook = () => {
    const [currentView, toggleView] = useState("viewPage");
    const [selectedPage, updateSelectedPage] = useState(null);
    const pageInfo = useSelector(
        ({ pages: { data: pageData, currentPage: pageId } }) => ({
            pageId,
            pageData,
        })
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const selectedPageIn = pageInfo.pageData.filter(
            (page) => page.id === pageInfo.pageId
        );
        if (selectedPageIn.length > 0) {
            updateSelectedPage(selectedPageIn[0]);
        }
    }, [pageInfo]);

    const updatePage = (data, title, id) => {
        const pagesCopy = [...pageInfo.pageData];
        const choosedPage = pagesCopy.find((page) => page.id === id);
        choosedPage.data = data;
        choosedPage.title = title;
        dispatch({ type: "SET_BOOK", data: pagesCopy });
        toggleView("viewPage");
    };

    const createpage = (data, title) => {
        const pagesCopy = [...pageInfo.pageData];
        pagesCopy.push({
            id: pagesCopy.length + 1,
            data,
            title,
        });
        dispatch({ type: "SET_BOOK", data: pagesCopy });
        toggleView("viewPage");
    };

    const chooseView = () => {
        switch (currentView) {
            case "viewPage":
                return (
                    <ViewPage
                        toggleView={toggleView}
                        selectedPage={selectedPage}
                    />
                );
            case "createPage":
                return (
                    <CreateBook
                        toggleView={toggleView}
                        createpage={createpage}
                    />
                );
            case "editPage":
                return (
                    <CreateBook
                        onEdit
                        updatePage={updatePage}
                        toggleView={toggleView}
                        selectedPage={selectedPage}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <Container fixed>
            <div>{selectedPage && chooseView()}</div>
        </Container>
    );
};

export default Ebook;
