import React from "react";
import BaseComponent from '../baseComponent'
import Disclaimer from './disclaimer'
import {sessionManager} from '../../managers/sessionManager';
import {cookiesConstants} from "../../constants";



class DisclaimerComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDisclaimer:false
        }
    }

    async componentDidMount() {
        if(!sessionManager.getDataFromCookies(cookiesConstants.DISCLAIMER)){
        this.setState({isDisclaimer:true})
        sessionManager.setDataInCookies(cookiesConstants.DISCLAIMER,true,)
        }

    }
    onClose=()=>{
        this.setState({isDisclaimer:false})
    }
 
  
    render() {
        return (
            <Disclaimer isDisclaimer={this.state.isDisclaimer}
            onClose={this.onClose}
            />
        );
    }
}

export default DisclaimerComponent;