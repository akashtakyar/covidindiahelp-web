import React from "react";
import BaseComponent from '../baseComponent'
import ColumnCardComponent from "./columnCardsComponents";
import {downVote, upVote} from "../../services/columns";

class ColumnCard extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
          
        }
    }

    componentDidMount() {


    }


    sendUpVoteRequest = async(id) => {
        let data = `${id}`

        try{
            let response = await upVote(data)
            if(response.responseData && Array.isArray(response.responseData) && response.responseData.length){
                this.setState({responseData : response.responseData})
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
                this.setState({responseData : response.responseData})
            }
        }catch(error){
            console.log(error)
        }

    }

    render() {
        return (
            <ColumnCardComponent
                responseData={this.props.responseData}
                state={this.state}
                sendUpVoteRequest={this.sendUpVoteRequest}
                sendDownVoteRequest={this.sendDownVoteRequest}

                incrementUpVote = {this.props.incrementUpVote}
                incrementDownVote = {this.props.incrementDownVote}
            />
        );
    }
}

export default ColumnCard;