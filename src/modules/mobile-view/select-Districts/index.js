import React from "react";
import BaseComponent from "../../baseComponent";
import DistrictComponent from "./selectDistricts";
import { getTagsForState } from "../../../services/columns";
import { history } from "../../../managers/history";
import { genericConstants } from "../../../constants";

class District extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedState: this.props.selectedState,
      stateDistrictList: [],
      categoryList: [],
      responseByLocation: {},
      allLocations: [],
      responseData: [],
      originalResponseData: [],
      isStateSelected: false,
    };
  }

  componentDidMount() {
    this.getDistricts();
  }

  // getSelectedDistrict = () => {
  //   let pathArray = window.location.pathname.split("/");
  //   pathArray = pathArray.filter((item) => !!item);
  //   return pathArray.length > 1 ? pathArray[1] : "All District";
  // };

  getDistricts = async () => {
    let request = {
      state: this.props.selectedState,
    };
    try {
      const response = await getTagsForState(request);
      if (
        !response ||
        !response.responseData ||
        !Array.isArray(response.responseData)
      ) {
        return;
      }
      const districtsArray = await response.responseData.filter(
        (obj) => obj.type === "DISTRICT"
      );
      this.setState({
        stateDistrictList: districtsArray,
        allLocations: districtsArray,
        categoryList: this.props.categoryList,
      });
    } catch (error) {
      console.log(error);
    }
  };

  onSelectDistrict = (value) => {
    if (this.props.toggleState) {
      this.props.toggleState(
        "selectedComponent",
        genericConstants.WEB_COMPONENT_TYPE.CATEGORY
      );
      this.props.toggleState(
        "selectedDistrict",
        value.includes("/") ? value.split("/")[0] : value
      );
    }

    history.push(
      `/${this.props.selectedState}/${
        value.includes("/")
          ? value.split("/")[0].toLowerCase()
          : value.toLowerCase()
      }`
    );
  };

  onBackToSelectState = () => {
    console.log("onBackToSelectState clicked");
    if (this.props.toggleState)
      this.props.toggleState(
        "selectedComponent",
        genericConstants.WEB_COMPONENT_TYPE.STATE
      );
    history.push("/");
  };

  onStateChange = (key, value) => {
    this.setState({ [key]: value });
  };

  toggleState = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <DistrictComponent
        selectedState={this.props.selectedState}
        stateDistrictList={this.state.stateDistrictList}
        onSelectDistrict={this.onSelectDistrict}
        onSelectLocation={this.onSelectLocation}
        selectedDistrict={this.props.selectedDistrict}
        categoryList={this.props.categoryList}
        onSelectCategory={this.onSelectCategory}
        onBackToSelectState={this.onBackToSelectState}
        onStateChange={this.onStateChange}
      />
    );
  }
}

export default District;
