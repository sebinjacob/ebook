import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useSelector, useDispatch } from "react-redux";

const PageList = () => {
    const pageList = useSelector(({ pages: { data = [] } }) => data);
    const dispatch = useDispatch();
    return (
        <Grid container direction='column'>
            <List>
                {pageList &&
                    pageList.length > 0 &&
                    pageList.map((page) => (
                        <Fragment key={page.id}>
                            <ListItem
                                button
                                onClick={() =>
                                    dispatch({
                                        type: "SET_CURRENT_PAGE",
                                        currentPage: page.id,
                                    })
                                }
                            >
                                <Typography variant='body1'>
                                    {page.title}
                                </Typography>
                            </ListItem>
                            <Divider />
                        </Fragment>
                    ))}
            </List>
        </Grid>
    );
};

export default PageList;
