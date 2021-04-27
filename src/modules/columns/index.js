import React from "react";
import BaseComponent from '../baseComponent'
import CoulumnComponent from './coulumnsComponents'
import {states} from "../../services/columns"
import utility from "../../utility";
import {stateNamesConstant} from "../../constants";

class Coloumn extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            selectedState: "All States",
            selectedTime: "4",
            drawerOpen: false,
            responseData: [],
            originalResponseData: [],
            countryStateList: [],
            responseByIndex: {},
            responseByLocation: {},
            list:[
                
                    {
                        label: "Oxygen",
                        filterKey: "oxygen"
                    },
                    {
                        label: "Bed",
                        filterKey: "bed"
                    },
                    {
                        label: "Blood Plasma",
                        filterKey: "plasma"
                    },
                    {
                        label: "Remdesivir/Tocilizumab",
                        filterKey: "remdesivir",
                        filterKey2: "tocilizumab"
                    },
                    {
                        label: "Fabiflu",
                        filterKey: "fabiflu"
                    },
            ]

        }
    }

    componentDidMount() {
        this.getStates("")
    }

    incrementUpVote = (id) => {
        let index = this.state.responseByIndex[id].index;
        this.state.responseData[index].upVoteCount = this.state.responseData[index].upVoteCount + 1;
        this.setState({responseData: this.state.responseData, originalResponseData: this.state.responseData})
    }

    incrementDownVote = (id) => {
        let index = this.state.responseByIndex[id].index;
        this.state.responseData[index].downVoteCount = this.state.responseData[index].downVoteCount + 1;
        this.setState({responseData: this.state.responseData, originalResponseData: this.state.responseData})

    }

    getStates = async (stateValue) => {
        let data = `${stateValue}`
        this.setState({responseData: [], originalResponseData: []})

        try {
            let response = await states(data)
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {

                let responseByIndex = {};
                let responseByLocation = {};
                let countryStateList = [];
                let keyToSave = "";

                response.responseData.forEach((obj, index) => {
                    responseByIndex[obj._id] = {"index": index, ...obj}

                    if (obj.state)
                        keyToSave = obj.state;
                    else if (obj.district)
                        keyToSave = obj.district;

                    // Make it Sentense case
                    keyToSave = stateNamesConstant[keyToSave] ? stateNamesConstant[keyToSave] : utility.toSentenceCase(keyToSave);
                    if (!responseByLocation[keyToSave]) {
                        responseByLocation[keyToSave] = [];
                        countryStateList.push({title: keyToSave})
                    }

                    responseByLocation[keyToSave].push({
                        "index": index,
                        ...obj
                    })
                })
                console.log("responseByLocation====", responseByLocation)

                this.setState({
                    responseData: response.responseData,
                    originalResponseData: response.responseData,
                    responseByIndex: responseByIndex,
                    responseByLocation: responseByLocation,
                    countryStateList: countryStateList.sort((a, b) => b.title < a.title ? 1 : -1)
                })
            }
        } catch (error) {
            console.log(error)
        }

    }

    handleChangeForCountryState = (event, selectedCountryState) => {
        console.log("testing",event.target.value,selectedCountryState);
        if(!event.target.value && document.getElementById("AllStates")) document.getElementById("AllStates").blur();
        let responseData = selectedCountryState ? this.state.responseByLocation[selectedCountryState] : this.state.originalResponseData
        if (!responseData)
            return
        this.setState({responseData})
    }

    handleColumnClose = async(item) => {
        var array = this.state.list;
  var index = array.indexOf(item)
  array.splice(index, 1);
  this.setState({list: array });
    }

    drawerToggleClickHandler = () => {
        this.setState({
          drawerOpen: !this.state.drawerOpen
        })
    }

    backdropClickHandler = () => {
        this.setState({
          drawerOpen: false
        })
      }

      handleNavigate=(text)=>{
        window.open('/add-information');
      }

    render() {
        return (
            <CoulumnComponent state={this.state}
                              getStates={this.getStates}
                              handleChangeForCountryState={this.handleChangeForCountryState}

                              incrementUpVote={this.incrementUpVote}
                              incrementDownVote={this.incrementDownVote}
                              handleColumnClose={this.handleColumnClose}
                              drawerToggleClickHandler={this.drawerToggleClickHandler}
                              backdropClickHandler={this.backdropClickHandler}
                              handleNavigate={this.handleNavigate}

                              responseData={this.state.responseData}
            />
        );
    }
}

export default Coloumn;