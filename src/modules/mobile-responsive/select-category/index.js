import React from "react";
import BaseComponent from '../../baseComponent'
import SelectCategoryComponent from './selectCategoryComponent'


class Category extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                
                {
                    label: "Oxygen",
                    filterKey: "oxygen"
                },
                {
                    label: "Bed",
                    filterKey: "bed"
                },
                {
                    label: "Blood Plasma",
                    filterKey: "plasma"
                },
                {
                    label: "Remdesivir/Tocilizumab",
                    filterKey: "remdesivir",
                    filterKey2: "tocilizumab"
                },
                {
                    label: "Fabiflu",
                    filterKey: "fabiflu"
                },
        ]
        }
    }

    componentDidMount() {
    
    }

  
    render() {
        return (
            <SelectCategoryComponent
                state={this.state}
            />
        );
    }
}

export default Category;