import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Select, Radio } from 'antd';
import './column.css'
function Credits({show,setShow}) {
    const { Option } = Select;
    
    return (
       <>
        {show? <div className="scrollbar" id="style-1" style={{right:'12px',top:'33px',position:'absolute',width:'290px',zIndex:'100000',height:'300px',overflowY:'scroll',overflowX:'hidden',background:'white',borderRadius:'5px',boxShadow:'0px 0px 3px #0005'}}>
            <p style={{fontWeight:'700',fontSize:'17px',marginLeft:'10px',marginTop:'15px',marginBottom:'5px'}}>
                Contributors
            </p>
            <p style={{fontWeight:'400',fontSize:'11px',marginLeft:'10px',marginTop:'15px',marginBottom:'5px'}}>
            We are a team working to help people find relevant and verified information at the time of the pandemic. Please be careful before sending any money to anyone. We are not responsible for any loss. The information is crowd sourced and it can be inaccurate. Here is the list of contributors of the project:

            <br/>
            <br/>
                For any further queries please contact at <a href="mailto: covidindiahelp.info@gmail.com">covidindiahelp.info@gmail.com</a> or join us on <a href="https://join.slack.com/t/covidindiahelpinfo/shared_invite/zt-q26daxgw-vZDRD3hpSAi2DkLYJuGzDw">slack</a>.
            </p>
        </div>:""}
       </>
    );
}

export default Credits;