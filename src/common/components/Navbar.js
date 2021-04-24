import { AppBar, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import BaseComponent from "../../modules/baseComponent";

class Navbar extends BaseComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBar position="static">
                 <Toolbar className={this.props.classes.navbar}>
                     <FormControl variant="outlined" className={this.props.classes.mx10}>
                         <InputLabel id="demo-simple-select-outlined-label">States</InputLabel>
                         <Select
                             labelId="demo-simple-select-outlined-label"
                             id="demo-simple-select-outlined"
                             label="Age"
                             value=""
                         >
                             <MenuItem value="">
                                 <em>None</em>
                             </MenuItem>
                             <MenuItem value={10}>Ten</MenuItem>
                             <MenuItem value={20}>Twenty</MenuItem>
                             <MenuItem value={30}>Thirty</MenuItem>
                         </Select>
                     </FormControl>
                     <Typography className={this.props.classes.mx10} variant="body2">Leads</Typography>
                     <Typography className={this.props.classes.mx10} variant="body2">Bookmarked</Typography>
                     <Typography className={this.props.classes.mx10} align="right" variant="body2">Show data of last: 4 hours</Typography>
                 </Toolbar>
             </AppBar>
        );
    }
}

export default Navbar;