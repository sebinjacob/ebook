/* eslint-disable react/no-danger */
import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";

function ViewPage(props) {
    const { toggleView, selectedPage } = props;
    return (
        <Grid container spacing={3} direction='column'>
            <Grid container justify='center' direction='row'>
                <Typography variant='h6'>{selectedPage.title}</Typography>
                <Button
                    type='button'
                    className='btn'
                    endIcon={<Edit />}
                    onClick={() => {
                        toggleView("editPage");
                    }}
                />
            </Grid>
            <Grid container justify='center'>
                <Grid
                    item
                    style={{
                        minHeight: "500px",
                        width: "100%",
                        backgroundColor: "#b3acac40",
                        borderRadius: "8px",
                        padding: "15px",
                        // lineHeight: "30px",
                    }}
                >
                    <Typography variant='subtitle1'>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: selectedPage.data,
                            }}
                        />
                    </Typography>
                </Grid>
            </Grid>

            <Grid container justify='flex-end'>
                <Grid item>
                    <Button
                        type='button'
                        className='btn'
                        endIcon={<Add />}
                        onClick={() => {
                            toggleView("createPage");
                        }}
                    >
                        <Typography
                            variant='button'
                            display='block'
                            gutterBottom
                        >
                            Add New Page
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

ViewPage.defaultProps = {
    selectedPage: {
        data: "",
        title: "",
    },
};

ViewPage.propTypes = {
    toggleView: PropTypes.func.isRequired,
    selectedPage: PropTypes.objectOf(PropTypes.any),
};

export default ViewPage;
