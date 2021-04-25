import React from "react";
import BaseComponent from '../baseComponent'
import CoulumnComponent from './coulumnsComponents'
import Utils from "../../utility";
import {states} from "../../services/columns"
import ColumnCard from "../column-cards";
import utility from "../../utility";

class Coloumn extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            selectedState: "All States",
            selectedTime: "4",
            responseData : [],
            responseByIndex : {}
          
        }
    }

     componentDidMount() {
        this.getStates("")
    }

    incrementUpVote = (id) =>
    {

        let index = this.state.responseByIndex[id].index;
        this.state.responseData[index].upVoteCount = this.state.responseData[index].upVoteCount+1;

        this.setState({responseData: this.state.responseData})

    }

    incrementDownVote = (id) =>
    {
        let index = this.state.responseByIndex[id].index;

        this.state.responseData[index].downVoteCount = this.state.responseData[index].downVoteCount+1;

        this.setState({responseData: this.state.responseData})

    }

     getStates = async(stateValue) => {
         let data = `${stateValue}`
         
        try{
            let response = await states(data)
            if(response.responseData && Array.isArray(response.responseData) && response.responseData.length){

                let responseByIndex = {};
                let responseByLocation = {};
                let keyToSave = "";

                response.responseData.forEach(
                    (obj,index) => {
                        responseByIndex[obj._id] = {
                            "index": index,
                            ...obj
                        }
                        //
                        // if (obj.state) {
                        //     keyToSave = obj.state;
                        // }
                        // if (obj.district) {
                        //     keyToSave = obj.district;
                        // }
                        //
                        // // Make it Sentense case
                        // keyToSave = utility.toSentenceCase(keyToSave);
                        //
                        // if (responseByLocation[keyToSave] === undefined)
                        //     responseByLocation[keyToSave] = [];
                        //
                        // responseByLocation[keyToSave].push({
                        //     "index": index,
                        //     ...obj
                        // })


                    })

                this.setState({responseData : response.responseData, responseByIndex: responseByIndex,responseByLocation: responseByLocation} )
            }
        }catch(error){
            console.log(error)
        }
    
     }


    render() {
        return (
            <CoulumnComponent state={this.state}
            getStates={this.getStates}

                              incrementUpVote = {this.incrementUpVote}
                              incrementDownVote = {this.incrementDownVote}

            responseData={this.state.responseData}
                            />
        );
    }
}

export default Coloumn;