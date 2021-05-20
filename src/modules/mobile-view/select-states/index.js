import React from "react";
import BaseComponent from "../../baseComponent";
import StateComponent from "./selectStates";
import LeadsComponent from "../leads";
import DistrictComponent from "../select-Districts";
import Category from "../select-category";
import { getTags } from "../../../services/columns";
import { history } from "../../../managers/history";
import Header from "../header";
import { genericConstants } from "../../../constants";
import Footer from "../../columns/footer";
import LeadDetails from "../../leadDetails";

class Coloumn extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: this.getSelectedComponent(),
      selectedCategory: this.getSelectedCategory(),
      selectedState: this.getSelectedState(),
      selectedDistrict: this.getSelectedDistrict(),
      countryStateList: [],
      categoryList: [],
      responseByLocation: {},
      allLocations: [],
      responseData: [],
      originalResponseData: [],
      isStateSelected: false,
    };
  }

  getSelectedComponent = () => {
    let pathArray = window.location.pathname.split("/");
    pathArray = pathArray.filter((item) => !!item);
    switch (pathArray.length) {
      case 0:
        return genericConstants.WEB_COMPONENT_TYPE.STATE;
      case 1:
        return genericConstants.WEB_COMPONENT_TYPE.DISTRICT;
      case 2:
        return genericConstants.WEB_COMPONENT_TYPE.CATEGORY;
      case 3:
        return genericConstants.WEB_COMPONENT_TYPE.CARDS;
    }

    return genericConstants.WEB_COMPONENT_TYPE.STATE;
  };

  getSelectedState = () => {
    let pathArray = window.location.pathname.split("/");
    pathArray = pathArray.filter((item) => !!item);
    return pathArray.length > 0 ? pathArray[0] : "All States";
  };

  getSelectedDistrict = () => {
    let pathArray = window.location.pathname.split("/");
    pathArray = pathArray.filter((item) => !!item);
    return pathArray.length > 1 ? pathArray[1] : "All District";
  };

  getSelectedCategory = () => {
    let pathArray = window.location.pathname.split("/");
    pathArray = pathArray.filter((item) => !!item);
    return pathArray.length > 2 ? pathArray[2] : "";
  };

  componentDidMount() {
    this.getStates();
  }

  getStates = async () => {
    try {
      const response = await getTags();
      if (
        !response ||
        !response.responseData ||
        !Array.isArray(response.responseData)
      ) {
        return;
      }
      const statesArray = await response.responseData.filter(
        (obj) => obj.type === "STATE"
      );
      const categoryArray = await response.responseData.filter(
        (obj) => obj.type === "CATEGORY"
      );
      this.setState({
        countryStateList: statesArray,
        allLocations: statesArray,
        categoryList: categoryArray,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChangeForCountryState = (event, selectedCountryState) => {
    if (
      event &&
      event.target &&
      !event.target.value &&
      document.getElementById("AllStates")
    )
      document.getElementById("AllStates").blur();

    let responseData = selectedCountryState
      ? this.state.responseByLocation[selectedCountryState]
      : this.state.originalResponseData;
    if (!responseData) return;
    this.setState({ responseData });
  };

  handleSearchLocationInput = (value) => {
    let locations = this.state.allLocations;
    if (value.length)
      locations = locations.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    this.setState({ countryStateList: locations });
  };

  toggleState = (key, value) => {
    this.setState({ [key]: value });
  };

  onSelectLocation = (value) => {
    this.setState({
      isStateSelected: true,
      selectedState: value,
      selectedComponent: genericConstants.WEB_COMPONENT_TYPE.DISTRICT,
    });
    history.push({
      pathname: `/${value}`,
      state: { name: value },
    });
  };

  MobileComponent = () => {
    switch (this.state.selectedComponent) {
      case genericConstants.WEB_COMPONENT_TYPE.STATE:
        return (
          <StateComponent
            state={this.state}
            getStates={this.getStates}
            countryStateList={this.state.countryStateList}
            handleChangeForCountryState={this.handleChangeForCountryState}
            handleSearchLocationInput={this.handleSearchLocationInput}
            onSelectLocation={this.onSelectLocation}
          />
        );
      case genericConstants.WEB_COMPONENT_TYPE.DISTRICT:
        return (
          <DistrictComponent
            state={this.state}
            toggleState={this.toggleState}
            selectedState={this.state.selectedState}
            onSelectDistrict={this.onSelectDistrict}
            stateDistrictList={this.state.stateDistrictList}
          />
        );
      case genericConstants.WEB_COMPONENT_TYPE.CATEGORY:
        return (
          <Category
            toggleState={this.toggleState}
            selectedState={this.state.selectedState}
            selectedDistrict={this.state.selectedDistrict}
            categoryList={this.state.categoryList}
          />
        );
      case genericConstants.WEB_COMPONENT_TYPE.CARDS:
        return (
          <LeadsComponent
            toggleState={this.toggleState}
            selectedState={this.state.selectedState}
            selectedDistrict={this.state.selectedDistrict}
            selectedCategory={this.state.selectedCategory}
          />
        );
    }
  };

  render() {
    let pathArray = window.location.pathname.split("/");
    let isDetailView =
      pathArray.length === 3 && pathArray[pathArray.length - 2] === "details";
    let isVolunteerView =
      pathArray.length === 2 &&
      (pathArray[pathArray.length - 1] === "volunteer" ||
        pathArray[pathArray.length - 1] === "volunteers");
    return (
      <div className="mobile-view">
        <Header
          isInfo={
            this.state.selectedComponent ===
            genericConstants.WEB_COMPONENT_TYPE.CARDS
          }
          toggleState={this.toggleState}
        />
        {isDetailView || isVolunteerView ? (
          <LeadDetails isVolunteerView={isVolunteerView} />
        ) : (
          this.MobileComponent()
        )}
        <Footer isVolunteerView={isVolunteerView} />
      </div>
    );
  }
}

export default Coloumn;
