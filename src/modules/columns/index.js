import React from "react";
import BaseComponent from '../baseComponent'
import CoulumnComponent from './coulumnsComponents'
import Utils from "../../utility";

class Coloumn extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
          
        }
    }

    componentDidMount() {

    }

  

    render() {
        return (
            <CoulumnComponent state={this.state}
                            />
        );
    }
}

export default Coloumn;