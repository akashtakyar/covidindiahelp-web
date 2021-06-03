import React from "react";
import BaseComponent from "../baseComponent";
import LeadDetailsComponent from "./leadDetailsComponent";
import Utility from "../../utility";
import {
  downVote,
  getCardDetails,
  upVote,
  getVolunteerCard,
  getCount,
  getVolunteerCardType,
} from "../../services/columns";

class LeadDetails extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      customComment: "",
      workingComment: "",
      leadDetails: "",
      uniqueContact: [],
      count: "",
      isShowNotWorkingPopup: false,
      isShowWorkingPopup: false,
    };
  }

  async componentDidMount() {
    let pathArray = window.location.pathname.split("/");
    if (
      pathArray.length === 3 &&
      (pathArray[pathArray.length - 1] === "need" ||
        pathArray[pathArray.length - 1] === "supply")
    )
      await (this.getVolunteerDetailsType(pathArray[pathArray.length - 1]),
      this.getCountDetails());
    else if (pathArray.length === 3)
      await this.getLeadDetails(pathArray[pathArray.length - 1]);
    else await (this.getVolunteerDetails(), this.getCountDetails());
  }

  getLeadDetails = async (id) => {
    try {
      let response = await getCardDetails({ id });
      if (
        !response ||
        !response.responseData ||
        Object.keys(response.responseData).length < 1
      )
        return;
      let uniqueContact = await this.getUniqueContact(response.responseData);
      this.setState({ uniqueContact, leadDetails: response.responseData });
    } catch (error) {
      console.log(error);
    }
  };

  getVolunteerDetails = async () => {
    try {
      let response = await getVolunteerCard();
      if (
        !response ||
        !response.responseData ||
        Object.keys(response.responseData).length < 1
      )
        return;
      let uniqueContact = await this.getUniqueContact(response.responseData[0]);
      this.setState({ uniqueContact, leadDetails: response.responseData[0] });
    } catch (error) {
      console.log(error);
    }
  };

  getVolunteerDetailsType = async (type) => {
    try {
      let response = await getVolunteerCardType({ type });
      if (
        !response ||
        !response.responseData ||
        Object.keys(response.responseData).length < 1
      )
        return;
      let uniqueContact = await this.getUniqueContact(response.responseData[0]);
      this.setState({ uniqueContact, leadDetails: response.responseData[0] });
    } catch (error) {
      console.log(error);
    }
  };

  getCountDetails = async () => {
    try {
      let pathArray = window.location.pathname.split("/");
      let need, supply, output;
      const type = pathArray[pathArray.length - 1].toUpperCase();
      let response = await getCount();
      if (
        !response ||
        !response.responseData ||
        Object.keys(response.responseData).length < 1
      ) {
        return;
      }
      if (type == "NEED") {
        need = response.responseData[1];
        output = need.countValue;
      } else if (type == "SUPPLY") {
        supply = response.responseData[0];
        output = supply.countValue;
      } else {
        need = response.responseData[1];
        supply = response.responseData[0];
        output = need.countValue + supply.countValue;
      }
      this.setState({ count: output });
    } catch (error) {
      console.log(error);
    }
  };
  getUniqueContact = async (data) => {
    if (!data && !data.phoneNumber.length) {
      return [];
    }
    let uniqueContact = [];
    data.phoneNumber.map((item) => {
      item = item.trim();
      if (!uniqueContact.includes(item) && item.length >= 10)
        uniqueContact.push(item);
    });
    return uniqueContact;
  };

  sendUpVoteRequest = async (id, desription) => {
    let data = `${this.state?.leadDetails?._id || ""}`;
    try {
      let response = await upVote(data, desription);
      if (
        !response ||
        !response.responseData ||
        Object.keys(response.responseData).length < 1
      )
        return;
      this.setState({ leadDetails: response.responseData, workingComment: "" });
    } catch (error) {
      console.log(error);
    }
    this.handleWorkingPopoverClose();
  };

  sendDownVoteRequest = async (id = "", desription) => {
    if (!desription) {
      Utility.apiFailureToast("Please add some comment");
      return;
    }
    let data = `${this.state?.leadDetails?._id || ""}`;
    try {
      let response = await downVote(data, desription);
      if (
        !response ||
        !response.responseData ||
        Object.keys(response.responseData).length < 1
      )
        return;
      this.setState({ leadDetails: response.responseData, customComment: "" });
    } catch (error) {
      console.log(error);
    }
    this.handleNotWorkingPopoverClose();
  };

  handleNotWorkingPopoverOpen = () => {
    this.setState({ isShowNotWorkingPopup: true, customComment: "" });
  };
  handleWorkingPopoverOpen = () => {
    this.setState({ isShowWorkingPopup: true, workingComment: "" });
  };
  handleNotWorkingPopoverClose = () => {
    this.setState({ isShowNotWorkingPopup: false });
  };
  handleWorkingPopoverClose = () => {
    this.setState({ isShowWorkingPopup: false });
  };

  onStateChange = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <>
        <LeadDetailsComponent
          state={this.state}
          isVolunteerView={this.props.isVolunteerView}
          isVolunteerViewType={this.props.isVolunteerViewType}
          getCountDetails={this.props.getCountDetails}
          handleNotWorkingPopoverOpen={this.handleNotWorkingPopoverOpen}
          handleWorkingPopoverOpen={this.handleWorkingPopoverOpen}
          getVolunteerDetails={this.getVolunteerDetails}
          getVolunteerDetailsType={this.getVolunteerDetailsType}
          sendUpVoteRequest={this.sendUpVoteRequest}
          sendDownVoteRequest={this.sendDownVoteRequest}
          handleNotWorkingPopoverClose={this.handleNotWorkingPopoverClose}
          handleWorkingPopoverClose={this.handleWorkingPopoverClose}
          onStateChange={this.onStateChange}
        />
      </>
    );
  }
}

export default LeadDetails;
