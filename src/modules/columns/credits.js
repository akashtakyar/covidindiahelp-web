import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Select, Radio } from 'antd';
import './column.css'
function Credits({show,setShow}) {
    const { Option } = Select;
    
    return (
       <>
        {show? <div className="scrollbar" id="style-1" style={{right:'80px',top:'33px',position:'absolute',width:'290px',zIndex:'100000',height:'300px',overflowY:'scroll',overflowX:'hidden',background:'white',borderRadius:'5px',boxShadow:'0px 0px 3px #0005'}}>
            <p style={{fontWeight:'700',fontSize:'17px',marginLeft:'10px',marginTop:'15px',marginBottom:'5px'}}>
                Contributors
            </p>
            <p style={{fontWeight:'400',fontSize:'11px',marginLeft:'10px',marginTop:'15px',marginBottom:'5px'}}>
            We are a team working to help people find relevant and verified information at the time of the pandemic. Please be careful before sending any money to anyone. We are not responsible for any loss. The information is crowd sourced and it can be inaccurate. Here is the list of contributors of the project:

            <br/>
            <br/>
            <li>Akash Takyar</li>
            <li>Kapil Saxena</li>
            <li>Prashant Raghav</li>
            <li>Ayush Kulshrestha</li>
            <li>Anurag Kumar</li>
            <li>Chandrika</li>
            <li>Rituraj</li>
            <li>Nishant Garg</li>
            <li>Gaurav Chauhan</li>
            <li>Sristi Rajput</li>
            <li>Dhanya Mary Biju</li>
            <li>Sharad Gupta</li>
            <li>Shivansh Mehendiratta</li>
            <li>Jayesh Gadewar</li>
            <li>Srinjoy Chowdhary</li>
            <br/>
            For any further queries please contact at covidindiahelp.info@gmail.com<br/><br/>v0.1 - beta
            </p>
        </div>:""}
       </>
    );
}

export default Credits;