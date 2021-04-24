import React from "react";
// import { Route, Switch } from "react-router-dom";

// Import material modules
import {
    MenuItem,
    Typography,
    Select,
    InputLabel,
    FormControl,
    Toolbar,
    AppBar,
    Container,
    Grid,
    GridList,
    GridListTile,
    Card,
    CardContent,
    Avatar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from '@material-ui/system';
import Navbar from "../common/components/Navbar";
import { Coloumn } from ".";

const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0
    },
    navbar: {
        backgroundColor: '#333333',
        Select: {
            '&:before': {
                borderColor: 'white',
            },
            '&:after': {
                borderColor: 'white',
            }
        }
    },
    mx10: {
        marginLeft: 10,
        marginRight: 10
    },
    swimlaneContainer: {
        padding: 5
    },
    mb10: {
        marginBottom: 10
    },
  });

  
function Main() {
    const classes = useStyles();

    return (
        <Container disableGutters="true" maxWidth="xl" className={classes.root}>
            <Navbar classes={classes} />
            <Coloumn />
        </Container>
    );
}

export default Main;
