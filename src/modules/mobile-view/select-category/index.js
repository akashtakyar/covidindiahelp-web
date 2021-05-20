import React from "react";
import BaseComponent from "../../baseComponent";
import SelectCategoryComponent from "./selectCategoryComponent";
import { history } from "../../../managers/history";
import { genericConstants } from "../../../constants";

class Category extends BaseComponent {
  onSelectCategory = (value) => {
    if (this.props.toggleState) {
      this.props.toggleState(
        "selectedComponent",
        genericConstants.WEB_COMPONENT_TYPE.CARDS
      );
      this.props.toggleState(
        "selectedCategory",
        value.includes("/") ? value.split("/")[0] : value
      );
    }
    if (this.props.selectedDistrict == " ") {
      history.push(
        `/${this.props.selectedState}/${
          value.includes("/")
            ? value.split("/")[0].toLowerCase()
            : value.toLowerCase()
        }`
      );
    } else {
      history.push(
        `/${this.props.selectedState}/${this.props.selectedDistrict}/${
          value.includes("/")
            ? value.split("/")[0].toLowerCase()
            : value.toLowerCase()
        }`
      );
    }
  };

  onBackToSelectDistrict = async () => {
    console.log("onBackToSelectDistrict clicked");
    if (this.props.toggleState)
      this.props.toggleState(
        "selectedComponent",
        genericConstants.WEB_COMPONENT_TYPE.DISTRICT
      );
    history.push(`/${this.props.selectedState}`);
  };

  render() {
    return (
      <SelectCategoryComponent
        selectedState={this.props.selectedState}
        selectedDistrict={this.props.selectedDistrict}
        categoryList={this.props.categoryList}
        onSelectCategory={this.onSelectCategory}
        onBackToSelectDistrict={this.onBackToSelectDistrict}
      />
    );
  }
}

export default Category;
