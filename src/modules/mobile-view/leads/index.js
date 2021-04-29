import React from "react";
import BaseComponent from '../../baseComponent'
import LeadsComponent from './lead'
import {getFilteredData,downVote,upVote} from "../../../services/columns"
import  Header  from "../header";
import {history} from '../../../managers/history'



class Category extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            allLeads:[],
            selectedState:'',
            selectedCategory:'',
            isShowSharePopup:false,
            popoverText:'',
            selectedItem:{},
            uniqueContact:[],
            responseByIndex:{},
            selectedSortingAttr:'Sort',
            originalResponseData:[]
        }
    }

    async componentDidMount() {
    console.log("tstvaxb,  x, ",this.props.location.state.name);
    await this.setState({selectedState:this.props.location.state.name,selectedCategory:this.props.location.state.category});
    await this.getAllLeads();

    }

    getAllLeads=async()=>{
        let request={
            state:this.state.selectedState.toLowerCase(),
            category:this.state.selectedCategory.toUpperCase()
        }
        let responseByIndex = {};
        console.log("dataaaa",request);
        const {responseData,error}=await getFilteredData(request);
        console.log("getAllLeads",responseData);
        if(!responseData) return
        responseData.forEach((obj, index) => {
            responseByIndex[obj._id] = {"index": index, ...obj}
        });
        console.log("responseByLocation====", responseByIndex)

        this.setState({allLeads:responseData,responseByIndex,originalResponseData:responseData})
    }
    backToSelectCategory=async()=>{
        history.push({
           pathname: `/state/${this.state.selectedState}/category`,
           state:{name:this.state.selectedState}
        })
    }
    sendUpVoteRequest = async(id) => {
        let data = `${id}`

        try{
            let response = await upVote(data)
            if(response.responseData && Array.isArray(response.responseData) && response.responseData.length){
                this.setState({allLeads : response.responseData,originalResponseData:response.responseData})
            }
        }catch(error){
            console.log(error)
        }

    }

    sendDownVoteRequest = async(id) => {
        let data = `${id}`

        try{
            let response = await downVote(data)
            if(response.responseData && Array.isArray(response.responseData) && response.responseData.length){
                this.setState({allLeads : response.responseData,originalResponseData:response.responseData})
            }
        }catch(error){
            console.log(error)
        }

    }
    handlePopoverOpen = async(item) => {
        console.log("handlePopoverOpen",item);
        let uniqueContact=[]
        uniqueContact=await this.getUniqueContact(item);
        console.log("handlePopoverOpen unique===",uniqueContact);
        await this.setState({isShowSharePopup:true,popoverText:item.description,selectedItem:item,uniqueContact:uniqueContact});
        console.log("handlePopoverOpen===========",this.state.isShowSharePopup);

      };
    
    handlePopoverClose = async() => {
       await this.setState({popoverAnchor:null,isShowSharePopup:false});
      };
      getUniqueContact=async(data)=>{
          if(!data && !data.phoneNumber.length){return []}
          let uniqueContact=[]
          data.phoneNumber.map((item)=>{
            item=item.trim()
              if(!uniqueContact.includes(item) && item.length>=10) uniqueContact.push(item)
          })
          console.log("getUniqueContact===",uniqueContact);
          return uniqueContact;
      }
    incrementUpVote = (id) => {
        let index = this.state.responseByIndex[id].index;
        this.state.allLeads[index].upVoteCount = this.state.allLeads[index].upVoteCount + 1;
        this.setState({allLeads: this.state.allLeads,originalResponseData: this.state.allLeads})
    }

    incrementDownVote = (id) => {
        let index = this.state.responseByIndex[id].index;
        this.state.allLeads[index].downVoteCount = this.state.allLeads[index].downVoteCount + 1;
        this.setState({allLeads: this.state.allLeads, originalResponseData: this.state.allLeads})

    }
    onSelectSorting=(event)=>{
        console.log("this.state.originalResponseData===========",this.state.originalResponseData,"leads====",this.state.allLeads);
        let dummyData=this.state.originalResponseData;
        this.setState({selectedSortingAttr:event.target.value});
        if(event.target.value==="Sort") return
        if(event.target.value==='working')
        dummyData=dummyData.sort((a,b)=>{return b.upVoteCount-a.upVoteCount})
        else{
            console.log("this.state.originalResponseData",this.state.originalResponseData);
            dummyData=dummyData.sort((a,b)=>{return b.channelCreatedOn-a.channelCreatedOn})
        }
        this.setState({allLeads:dummyData})


    }
    

  
    render() {
        return (
            <>
            <Header isInfo={true}></Header>
            <LeadsComponent
                state={this.state}
                backToSelectCategory={this.backToSelectCategory}
                handlePopoverOpen={this.handlePopoverOpen}
                handlePopoverClose={this.handlePopoverClose}
                incrementUpVote={this.incrementUpVote}
                incrementDownVote={this.incrementDownVote}
                sendUpVoteRequest={this.sendUpVoteRequest}
                sendDownVoteRequest={this.sendDownVoteRequest}
                onSelectSorting={this.onSelectSorting}
            />
            </>
        );
    }
}

export default Category;