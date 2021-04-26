import React from "react";
import BaseComponent from '../baseComponent'
import CoulumnComponent from './coulumnsComponents'
import {states} from "../../services/columns"
import utility from "../../utility";

class Coloumn extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            selectedState: "All States",
            selectedTime: "4",
            responseData: [],
            originalResponseData: [],
            responseByIndex: {},
            responseByLocation: {},

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

        try {
            let response = await states(data)
            if (response.responseData && Array.isArray(response.responseData) && response.responseData.length) {

                let responseByIndex = {};
                let responseByLocation = {};
                let keyToSave = "";

                response.responseData.forEach((obj, index) => {
                    responseByIndex[obj._id] = {"index": index, ...obj}

                    if (obj.state)
                        keyToSave = obj.state;
                    else if (obj.district)
                        keyToSave = obj.district;

                    // Make it Sentense case
                    keyToSave = utility.toSentenceCase(keyToSave);
                    if (!responseByLocation[keyToSave])
                        responseByLocation[keyToSave] = [];

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
                    responseByLocation: responseByLocation
                })
            }
        } catch (error) {
            console.log(error)
        }

    }

    handleChangeForCountryState = (selectedCountryState) => {
        let responseData = selectedCountryState ? this.state.responseByLocation[selectedCountryState] : this.state.originalResponseData
        this.setState({responseData})
    }

    render() {
        return (
            <CoulumnComponent state={this.state}
                              getStates={this.getStates}
                              handleChangeForCountryState={this.handleChangeForCountryState}

                              incrementUpVote={this.incrementUpVote}
                              incrementDownVote={this.incrementDownVote}

                              responseData={this.state.responseData}
            />
        );
    }
}

export default Coloumn;