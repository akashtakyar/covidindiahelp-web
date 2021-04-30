import React, {useLayoutEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Coloumn} from ".";
import MobileView from '../modules/mobile-view/select-states'
import Disclaimer from './disclaimer'

const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
        position: "relative"
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
    dropdown: {
        '.& MuiSelect-outlined.MuiSelect-outlined': {
            paddingRight: '82px'
        }
    },
});

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}


function Main() {
    const [width, height] = useWindowSize();
    const classes = useStyles();
    return (
        <div style={{width: "100% !important"}} className={classes.root}>
            <Disclaimer></Disclaimer>
            {/* <MobileView className="mobile-view"/> */}
            {width > 480 ? <Coloumn className="desktop-view"/> : <MobileView className="mobile-view"/>}
        </div>
    );
}

export default Main;
