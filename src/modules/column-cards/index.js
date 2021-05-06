import React from "react";
import BaseComponent from '../baseComponent'
import ColumnCardComponent from "./columnCardsComponents";
import { downVote, upVote } from "../../services/columns";

class ColumnCard extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            isShowSharePopup: false,
            popoverAnchor: null,
            popoverText: '',
            selectedItem: {},
            uniqueContact: []
        }
    }

    sendUpVoteRequest = async (id) => {
        let data = `${id}`
        try {
            let response = await upVote(data)
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {
                this.setState({ responseData: response.responseData })
            }
        } catch (error) {
            console.log(error)
        }

    }

    sendDownVoteRequest = async (id) => {
        let data = `${id}`

        try {
            let response = await downVote(data)
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {
                this.setState({ responseData: response.responseData })
            }
        } catch (error) {
            console.log(error)
        }

    }
    showSharePopup = async () => {
        this.setState({ isShowSharePopup: !this.state.isShowSharePopup })
    }
    handlePopoverOpen = async (item) => {
        console.log("handlePopoverOpen", item);
        let uniqueContact = []
        uniqueContact = await this.getUniqueContact(item);
        await this.setState({ isShowSharePopup: true, popoverText: item.description, selectedItem: item, uniqueContact: uniqueContact });

    };

    handlePopoverClose = async () => {
        await this.setState({ popoverAnchor: null, isShowSharePopup: false });
    };
    getUniqueContact = async (data) => {
        if (!data && !data.phoneNumber.length) { return [] }
        let uniqueContact = []
        data.phoneNumber.map((item) => {
            item = item.trim()
            if (!uniqueContact.includes(item) && item.length >= 10) uniqueContact.push(item)
        })
        console.log("getUniqueContact===", uniqueContact);
        return uniqueContact;
    }

    render() {
        return (
            <ColumnCardComponent
                responseData={this.props.responseData}
                originalResponseData={this.props.originalResponseData}
                state={this.state}
                sendUpVoteRequest={this.sendUpVoteRequest}
                sendDownVoteRequest={this.sendDownVoteRequest}
                handlePopoverClose={this.handlePopoverClose}
                handlePopoverOpen={this.handlePopoverOpen}
                incrementUpVote={this.props.incrementUpVote}
                incrementDownVote={this.props.incrementDownVote}
                showSharePopup={this.showSharePopup}
            />
        );
    }
}

export default ColumnCard;