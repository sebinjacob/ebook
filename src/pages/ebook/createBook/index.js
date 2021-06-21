import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Editor from "../../../components/textEditor";
import "./createbook.css";

const useStyles = makeStyles({
    save: {
        border: 0,
        borderRadius: 3,
        backgroundColor: "#dc60c791",
        color: "#fff",
        height: 48,
        padding: "0 30px",
    },
    back: {
        border: 0,
        borderRadius: 3,
        color: "#fff",
        height: 48,
        padding: "0 30px",
    },
});

const CreateBook = (props) => {
    const { toggleView, selectedPage, onEdit, updatePage, createpage } = props;
    const [pageContent, updatePageContent] = useState(selectedPage?.data || "");
    const [pageTitle, updatePageTitle] = useState(selectedPage?.title || "");

    useEffect(() => {
        updatePageContent(selectedPage?.data || "");
        updatePageTitle(selectedPage?.title || "");
    }, [selectedPage]);

    const classes = useStyles();
    return (
        <Grid container spacing={2} direction='column'>
            <Grid item>
                <TextField
                    variant='outlined'
                    type='text'
                    label='Title'
                    placeholder='Title'
                    value={pageTitle}
                    onChange={(e) => {
                        e.stopPropagation();
                        updatePageTitle(e.target.value);
                    }}
                />
            </Grid>
            <Grid item>
                <Editor
                    data={pageContent}
                    onSave={(data) => {
                        updatePageContent(data);
                    }}
                />
            </Grid>
            <Grid item>
                <Grid container justify='flex-end' spacing={2}>
                    <Grid item>
                        <Button
                            type='button'
                            variant='contained'
                            className={classes.save}
                            onClick={() => {
                                // eslint-disable-next-line no-unused-expressions
                                onEdit
                                    ? updatePage(
                                          pageContent,
                                          pageTitle,
                                          selectedPage.id
                                      )
                                    : createpage(pageContent, pageTitle);
                            }}
                            disabled={
                                pageTitle.length === 0 ||
                                pageContent.length === 0
                            }
                        >
                            Save Page
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            type='button'
                            variant='contained'
                            color='primary'
                            className={classes.back}
                            onClick={() => {
                                toggleView("viewPage");
                            }}
                        >
                            Back to book
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

CreateBook.defaultProps = {
    updatePage: null,
    createpage: null,
    onEdit: false,
    selectedPage: {
        data: "",
        title: "",
    },
};

CreateBook.propTypes = {
    toggleView: PropTypes.func.isRequired,
    selectedPage: PropTypes.objectOf(PropTypes.any),
    onEdit: PropTypes.bool,
    updatePage: PropTypes.func,
    createpage: PropTypes.func,
};

export default CreateBook;
