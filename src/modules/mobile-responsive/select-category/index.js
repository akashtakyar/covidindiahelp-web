import React from "react";
import BaseComponent from '../../baseComponent'
import SelectCategoryComponent from './selectCategoryComponent'


class Category extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    
    }

  
    render() {
        return (
            <SelectCategoryComponent/>
        );
    }
}

export default Category;