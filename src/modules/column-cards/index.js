import React from "react";
import BaseComponent from '../baseComponent'
import ColumnCardComponent from "./columnCardsComponents";

class ColumnCard extends BaseComponent {
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
            <ColumnCardComponent responseData={this.props.responseData} state={this.state} />
        );
    }
}

export default ColumnCard;