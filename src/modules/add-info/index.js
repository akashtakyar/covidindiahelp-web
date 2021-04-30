import React from "react";
import BaseComponent from '../baseComponent'
import AddInfoComponent from './addInfoComponent'
import {history} from "../../managers/history";

class AddInfo extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen:false
        }
    }

    componentDidMount() {
    
    }

  
    render() {
        return (
            <AddInfoComponent/>
        );
    }
}

export default AddInfo;