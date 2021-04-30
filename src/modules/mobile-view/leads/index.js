import React from "react";
import BaseComponent from '../../baseComponent'
import LeadsComponent from './lead'
import {getFilteredData, downVote, upVote} from "../../../services/columns"
import {history} from '../../../managers/history'
import {genericConstants} from "../../../constants";


class Category extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            allLeads: [],
            selectedState: props.selectedState,
            selectedCategory: props.selectedCategory,
            isShowSharePopup: false,
            popoverText: '',
            selectedItem: {},
            uniqueContact: [],
            responseByIndex: {}
        }
    }

    async componentDidMount() {
        await this.getAllLeads();
    }

    getAllLeads = async () => {
        let request = {
            state: this.props.selectedState.toLowerCase(),
            category: this.props.selectedCategory.toUpperCase()
        }
        let responseByIndex = {};
        const {responseData, error} = await getFilteredData(request);
        if (!responseData) return
        responseData.forEach((obj, index) => {
            responseByIndex[obj._id] = {"index": index, ...obj}
        });

        this.setState({allLeads: responseData, responseByIndex})
    }
    backToSelectCategory = async () => {
        this.props.toggleState("selectedComponent", genericConstants.WEB_COMPONENT_TYPE.CATEGORY)
        history.push(`/${this.props.selectedState}`)
    }

    sendUpVoteRequest = async (id) => {
        let data = `${id}`
        try {
            let response = await upVote(data)
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {
                this.setState({allLeads: response.responseData})
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
                this.setState({allLeads: response.responseData})
            }
        } catch (error) {
            console.log(error)
        }

    }
    handlePopoverOpen = async (item) => {
        let uniqueContact = []
        uniqueContact = await this.getUniqueContact(item);
        await this.setState({
            isShowSharePopup: true,
            popoverText: item.description,
            selectedItem: item,
            uniqueContact: uniqueContact
        });
    };

    handlePopoverClose = async () => {
        await this.setState({popoverAnchor: null, isShowSharePopup: false});
    };

    getUniqueContact = async (data) => {
        if (!data && !data.phoneNumber.length) {
            return []
        }
        let uniqueContact = []
        data.phoneNumber.map((item) => {
            item = item.trim()
            if (!uniqueContact.includes(item) && item.length >= 10) uniqueContact.push(item)
        })
        return uniqueContact;
    }

    incrementUpVote = (id) => {
        let index = this.state.responseByIndex[id].index;
        this.state.allLeads[index].upVoteCount = this.state.allLeads[index].upVoteCount + 1;
        this.setState({allLeads: this.state.allLeads})
    }

    incrementDownVote = (id) => {
        let index = this.state.responseByIndex[id].index;
        this.state.allLeads[index].downVoteCount = this.state.allLeads[index].downVoteCount + 1;
        this.setState({allLeads: this.state.allLeads, originalResponseData: this.state.allLeads})
    }


    render() {
        return (
            <LeadsComponent
                state={this.state}
                selectedState={this.props.selectedState}
                selectedCategory={this.props.selectedCategory}
                backToSelectCategory={this.backToSelectCategory}
                handlePopoverOpen={this.handlePopoverOpen}
                handlePopoverClose={this.handlePopoverClose}
                incrementUpVote={this.incrementUpVote}
                incrementDownVote={this.incrementDownVote}
                sendUpVoteRequest={this.sendUpVoteRequest}
                sendDownVoteRequest={this.sendDownVoteRequest}
            />
        );
    }
}

export default Category;
