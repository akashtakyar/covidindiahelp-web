import React, {useState} from 'react'
import './column.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      top:"35px",
      height:"565px"
    }
  }));

function ColumnComponent(props) {
    const classes = useStyles();
  const theme = useTheme();
    // let drawerClasses = 'side-drawer'
    //    if(props.show) {
    //       drawerClasses = 'side-drawer open'
    //    }

    return (

        <div>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.show}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {['Dashboard', 'Add Information', 'About'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} onClick={() => {
                props.handleNavigate(index)}}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
        </div>

    );
}

export default ColumnComponent;