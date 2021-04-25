import React from "react";
import BaseComponent from '../baseComponent'
import CoulumnComponent from './coulumnsComponents'
import Utils from "../../utility";
import {states} from "../../services/columns"

class Coloumn extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            selectedState: "All States",
            selectedTime: "4",
            responseData : []
          
        }
    }

     componentDidMount() {
        this.getStates("")


    }
   
     getStates = async(stateValue) => {
         let data = `${stateValue}`
         
        try{
            let response = await states(data)
            if(response.responseData && Array.isArray(response.responseData) && response.responseData.length){
                this.setState({responseData : response.responseData})
            }
        }catch(error){
            console.log(error)
        }
    
     }
  

    render() {
        return (
            <CoulumnComponent state={this.state}
            getStates={this.getStates}
            responseData={this.state.responseData}
                            />
        );
    }
}

export default Coloumn;