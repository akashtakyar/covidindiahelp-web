import React from 'react'
import {Row, Column} from "simple-flexbox";
import Dialog from '@material-ui/core/Dialog';


function DisclaimerDialog (props) {
    return(
         <Dialog
        open={props.isDisclaimer}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    >
        <div className="disclaimer">
            <Row className="disclaimer-row">Covidindiahelp.info is a crowdsourced covid resources website. We try to verify covid help leads’ information to the best of our ability, but we cannot verify every entry on the website.</Row>

            <Row  className="disclaimer-row">Contacting the leads and performing primary verification before moving forward with the information is the user's responsibility. We strongly recommend that you verify the lead information on your end before following up on them.</Row>

            <Row  className="disclaimer-row">We should not be held responsible for any fraudulent information or monetary exchange. The users on the website are responsible for their actions with the data we make public.
            By clicking on 'accept', you are affirming to follow our privacy policy.</Row>

            <Row style={{justifyContent:"flex-end"}}><button className="disclaimer-button" onClick={props.onClose}>Accept</button></Row>
        </div>
     </Dialog>
    );
}
export default DisclaimerDialog