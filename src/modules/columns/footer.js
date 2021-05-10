import React from "react";
import {Row} from "simple-flexbox";

const Footer = (props) =>
    <Row className="disclaimer-text disclaimer-text-top">
        {props.isVolunteerView ?
            "Please always abide by laws and keep any patient information confidential. We discourage anyone from paying or asking for money from anyone. The work here is absolutely volunteer, and you are helping people at your own will." :
            "Disclaimer: Please do not send any money to anyone. We are not responsible for any loss. The information listed on our website is crowd sourced and it can be inaccurate."}
    </Row>

export default Footer
