import React from "react";
import BaseComponent from '../../baseComponent'
import StateComponent from './selectStates'
import {states,getStates} from "../../../services/columns"
import utility from "../../../utility";
import {stateNamesConstant} from "../../../constants";
import { Category } from "@material-ui/icons";
import CategoryComponent from "../select-category"
import {history} from "../../../managers/history";
import Header from "../header";

class Coloumn extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedState: "All States",
            countryStateList: [],
            responseByLocation: {},
            allLocations:[],
            isStateSelected:false   
        
        }
    }

    componentDidMount() {
       const route= window.location.pathname;
       console.log("route====",route);
        this.getStates("")
    }

    getStates = async (stateValue) => {
        this.setState({responseData: [], originalResponseData: []})

        try {
            let response = await getStates()
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {

                // let countryStateList = [];
                // response.responseData.forEach((obj, index) => {
                //     responseByIndex[obj._id] = {"index": index, ...obj}

                //     if (obj.state)
                //         keyToSave = obj.state;
                //     else if (obj.district)
                //         keyToSave = obj.district;

                //     // Make it Sentense case
                //     keyToSave = stateNamesConstant[keyToSave] ? stateNamesConstant[keyToSave] : utility.toSentenceCase(keyToSave);
                //     if (!responseByLocation[keyToSave]) {
                //         responseByLocation[keyToSave] = [];
                //         countryStateList.push({title: keyToSave})
                //     }

                //     responseByLocation[keyToSave].push({
                //         "index": index,
                //         ...obj
                //     })
                // })
                // console.log("responseByLocation====", responseByLocation)

                this.setState({
                    countryStateList: response.responseData,
                    allLocations:response.responseData
                })
                console.log("countryStateList====", this.state.countryStateList)

            }
        } catch (error) {
            console.log(error)
        }

    }

    handleChangeForCountryState = (event, selectedCountryState) => {
        if(event && event.target &&!event.target.value && document.getElementById("AllStates")) 
        document.getElementById("AllStates").blur();

        let responseData = selectedCountryState ? this.state.responseByLocation[selectedCountryState] : this.state.originalResponseData
        if (!responseData)
            return
        this.setState({responseData})
    }
    handleSearchLocationInput=(value)=>{
        let locations=this.state.allLocations;
        if(value.length){
        locations=locations.filter(item=>{
             if(item.name.toLowerCase().includes(value.toLowerCase()))
              return item
            })
        }
        this.setState({countryStateList:locations})
    }
    onSelectLocation=(value)=>{
        this.setState({isStateSelected:true,selectedState:value})
        history.push({
            pathname:`/state/${value}/category`,
            state:{name:value}
        })
        // pathname: '/secondpage',
        // search: '?query=abc',
        // state: { detail: 'some_value' }
    }

    render() {
        return (
            <div className="mobile-view">
            <Header isInfo={false}></Header>
            <StateComponent state={this.state}
                              getStates={this.getStates}
                              countryStateList={this.state.countryStateList}
                              handleChangeForCountryState={this.handleChangeForCountryState}
                              handleSearchLocationInput={this.handleSearchLocationInput}
                              onSelectLocation={this.onSelectLocation}
            />
            </div>
        );
    }
}

export default Coloumn;