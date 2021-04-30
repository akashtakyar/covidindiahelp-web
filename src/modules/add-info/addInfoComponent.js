import React, {useState} from 'react'
import Header from "../common/index";
import './addinfo.css'

function AddInfoComponent(props) {

    console.log("props",props);

    return (
        <>
        <Header type="about"/>

        <div className='main'>
            <div className='div1'>
                
            </div>
            <div className='div2'>
            <div className='fs-14 fc-label-black m-t-40 mb-xs'>
                    About
                </div>
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
                <li>Sunny Kumar</li>
            <br/>
            For any further queries please contact at covidindiahelp.info@gmail.com<br/><br/>v0.1 - beta
            </p>
            </div>
            <div className="div3">

            </div>
        </div>
        
        </>

    );
}

export default AddInfoComponent;