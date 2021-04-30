import React from "react";
import BaseComponent from '../../baseComponent'
import SelectCategoryComponent from './selectCategoryComponent'
import {history} from '../../../managers/history'
import {genericConstants} from "../../../constants";

class Category extends BaseComponent {
    onSelectCategory = (value) => {
        if (this.props.toggleState) {
            this.props.toggleState("selectedComponent", genericConstants.WEB_COMPONENT_TYPE.CARDS)
            this.props.toggleState("selectedCategory", value)
        }
        history.push(`/${this.props.selectedState}/${value}`)
    }

    onBackToSelectState = () => {
        if (this.props.toggleState)
            this.props.toggleState("selectedComponent", genericConstants.WEB_COMPONENT_TYPE.STATE)
        history.push('/')
    }

    render() {
        return (
            <SelectCategoryComponent
                selectedState={this.props.selectedState}
                categoryList={this.props.categoryList}
                onSelectCategory={this.onSelectCategory}
                onBackToSelectState={this.onBackToSelectState}
            />
        );
    }
}

export default Category;
