import React from "react";
import BaseComponent from '../../baseComponent'
import LeadsComponent from './lead'
import {getFilteredData, downVote, upVote} from "../../../services/columns"
import {history} from '../../../managers/history'
import {genericConstants} from "../../../constants";
import Utility from "../../../utility";

class Category extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            allLeads: [],
            selectedState: props.selectedState,
            selectedCategory: props.selectedCategory,
            isShowSharePopup: false,
            isShowNotWorkingPopup: false,
            isShowWorkingPopup: false,
            id: '',
            popoverText: '',
            selectedItem: {},
            uniqueContact: [],
            responseByIndex: {},
            selectedSortingAttr: 'recent',
            originalResponseData: [],
            responseMessage: false,
            customComment:'',
            workingComment:''
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
        const {responseData, error, message} = await getFilteredData(request);
        if (!responseData) return
        responseData.forEach((obj, index) => {
            responseByIndex[obj._id] = {"index": index, ...obj}
        });
        if (message === "Covid Help info fetched successfully") {
            this.setState({responseMessage: true})
        }
        this.setState({allLeads: responseData, responseByIndex, originalResponseData: responseData})
    }
    backToSelectCategory = async () => {
        this.props.toggleState("selectedComponent", genericConstants.WEB_COMPONENT_TYPE.CATEGORY)
        history.push(`/${this.props.selectedState}`)
    }

    sendUpVoteRequest = async (id, desription) => {
        let data = `${id}`
        try {
            let response = await upVote(data, desription)
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {
                this.setState({allLeads: response.responseData, originalResponseData: response.responseData})
            }
            this.incrementUpVote(id,response?.responseData?.comments || []);
        } catch (error) {
            console.log(error)
        }
        this.handlePopoverClose(this.state.isShowSharePopup);
    }

    sendDownVoteRequest = async (id, description) => {
    if(!description){
        Utility.apiFailureToast("Please add some comment");
        return;
        }
        let data = `${id}`
        try {
            let response = await downVote(data, description)
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {
                this.setState({allLeads: response.responseData, originalResponseData: response.responseData})
            }
            this.incrementDownVote(id, response?.responseData?.comments || [])

        } catch (error) {
            console.log(error)
        }
        this.handlePopoverClose(this.state.isShowSharePopup);
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

    handlePopoverClose = async (isShowSharePopup = false) => {
        console.log("isShowSharePopup===", isShowSharePopup)
        await this.setState({popoverAnchor: null, isShowSharePopup: isShowSharePopup,
         isShowNotWorkingPopup: false, isShowWorkingPopup:false});
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

    incrementUpVote = (id, comments=[]) => {
        let index = this.state.responseByIndex[id].index;
        this.state.allLeads[index].upVoteCount = this.state.allLeads[index].upVoteCount + 1;
        this.state.allLeads[index].comments = comments;
        this.setState({allLeads: this.state.allLeads, originalResponseData: this.state.allLeads})
    }

    incrementDownVote = (id, comments = []) => {
        let index = this.state.responseByIndex[id].index;
        this.state.allLeads[index].downVoteCount = this.state.allLeads[index].downVoteCount + 1;
        this.state.allLeads[index].comments = comments;
        this.setState({allLeads: this.state.allLeads, originalResponseData: this.state.allLeads})
    }


    onSelectSorting = (event) => {
        let dummyData = this.state.originalResponseData;
        this.setState({selectedSortingAttr: event.target.value});
        if (event.target.value === "Sort") return
        if (event.target.value === 'working')
            dummyData = dummyData.sort((a, b) => {
                return b.upVoteCount - a.upVoteCount
            })
        else {
            dummyData = dummyData.sort((a, b) => {
                return b.channelCreatedOn - a.channelCreatedOn
            })
        }
        this.setState({allLeads: dummyData})
    }

    handleNotWorkingPopoverOpen = async (id) => {
        await this.setState({isShowNotWorkingPopup: true, id: id, customComment:''});
    };

    handleWorkingPopoverOpen = async (id) => {
            await this.setState({isShowWorkingPopup: true, id: id, workingComment:''});
        };

    onStateChange = (key, value)=>{
      this.setState({[key]:value})
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
                onSelectSorting={this.onSelectSorting}
                handleNotWorkingPopoverOpen={this.handleNotWorkingPopoverOpen}
                handleWorkingPopoverOpen={this.handleWorkingPopoverOpen}
                onStateChange={this.onStateChange}
            />
        );
    }
}

export default Category;
