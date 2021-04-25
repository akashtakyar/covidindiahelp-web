import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Select, Radio } from 'antd';
import './column.css'
import Credits from './credits';
import InfoIcon from '@material-ui/icons/Info';
import RefreshIcon from '@material-ui/icons/Refresh';
function ColumnComponent(props) {
    const { Option } = Select;
    const children = [];
    children.push(<Option key={""}>{"All States"}</Option>);
    // children.push(<Option key={"andhra"}>{"Andhra Pradesh"}</Option>);
    // children.push(<Option key={"arunachal"}>{"Arunachal Pradesh"}</Option>);
    // children.push(<Option key={"assam"}>{"Assam"}</Option>);
    // children.push(<Option key={"bihar"}>{"Bihar"}</Option>);
    // children.push(<Option key={"chhattisgarh"}>{"Chhattisgarh"}</Option>);
    // children.push(<Option key={"goa"}>{"Goa"}</Option>);
    // children.push(<Option key={"gujarat"}>{"Gujarat"}</Option>);
    // children.push(<Option key={"haryana"}>{"Haryana"}</Option>);
    // children.push(<Option key={"himachal"}>{"Himachal Pradesh"}</Option>);
    // children.push(<Option key={"jharkhand"}>{"Jharkhand"}</Option>);
    // children.push(<Option key={"karnataka"}>{"Karnataka"}</Option>);
    // children.push(<Option key={"kerala"}>{"Kerala"}</Option>);
    // children.push(<Option key={"madhya"}>{"Madhya Pradesh"}</Option>);
    // children.push(<Option key={"maharashtra"}>{"Maharashtra"}</Option>);
    // children.push(<Option key={"manipur"}>{"Manipur"}</Option>);
    // children.push(<Option key={"meghalaya"}>{"Meghalaya"}</Option>);
    // children.push(<Option key={"mizoram"}>{"Mizoram"}</Option>);
    // children.push(<Option key={"nagaland"}>{"Nagaland"}</Option>);
    // children.push(<Option key={"odisha"}>{"Odisha"}</Option>);
    // children.push(<Option key={"punjab"}>{"Punjab"}</Option>);
    // children.push(<Option key={"rajasthan"}>{"Rajasthan"}</Option>);
    // children.push(<Option key={"sikkim"}>{"Sikkim"}</Option>);
    // children.push(<Option key={"tamil"}>{"Tamil Nadu"}</Option>);
    // children.push(<Option key={"telangana"}>{"Telangana"}</Option>);
    // children.push(<Option key={"tripura"}>{"Tripura"}</Option>);
    // children.push(<Option key={"uttarakhand"}>{"Uttarakhand"}</Option>);
    // children.push(<Option key={"uttar"}>{"Uttar Pradesh"}</Option>);
    // children.push(<Option key={"bengal"}>{"West Bengal"}</Option>);
    // children.push(<Option key={"andaman"}>{"Andaman And Nicobar Islands"}</Option>);
    // children.push(<Option key={"chandigarh"}>{"Chandigarh"}</Option>);
    // children.push(<Option key={"delhi"}>{"Delhi"}</Option>);
    // children.push(<Option key={"jammu"}>{"Jammu & Kashmir"}</Option>);
    // children.push(<Option key={"ladakh"}>{"Ladakh"}</Option>);
    // children.push(<Option key={"lakshadweep"}>{"Lakshadweep"}</Option>);
    // children.push(<Option key={"puducherry"}>{"Puducherry"}</Option>)
    // children.push(<Option key={"dadra"}>{"Dadra and Nagar Haveli"}</Option>)
    // children.push(<Option key={"daman"}>{"Daman and Diu"}</Option>)

    const [selected  , setSelected ] = useState("All States")
    const [showCredits  , setshowCredits ] = useState(false)

    function handleChange(value) {
        setSelected(value)
        props.getStates(value)
    }
    return (
        <Row gutter={[24, 16]} style={{backgroundColor : "#474951" , height: "35px",marginLeft:'0px',marginRight:'0px'}}>
             <Col className="navbar-cont" span={2.5}>
                <Row>
                    <span className="bookmarked" style={{fontSize: "12px",marginLeft:'10px'}}>Covid India Help</span>
                </Row>
            </Col>
            <Col className="navbar-cont" span={3}>
                <Row style={{marginLeft : "12px"}}>
                    <Select style={{background : "#55575E" , color : "white",fontSize:'11px',height:'30px'}} size={"medium"} defaultValue={selected} onChange={handleChange} style={{ width: 150 }}>
                        {children}
                    </Select>
                </Row>
            </Col>
            <Col className="navbar-cont" span={16}>
                <Row onClick={props.onRefresh} style={{cursor:'pointer'}}>
                    <span className="bookmarked" style={{fontSize: "10px"}}></span>
                </Row>
            </Col>
            <Col  className="navbar-cont" span={1}>
                <Row>
                    <span className="bookmarked" style={{fontSize: "10px"}}></span>
                </Row>
            </Col>
            
            <Col onClick={()=>setshowCredits(!showCredits)} className="navbar-cont" span={1}>
                <Row style={{cursor:'pointer'}}>
                    <span className="bookmarked" style={{fontSize: "11px"}}><InfoIcon style={{color:'white',fontSize:'20px'}} /> </span>
                </Row>
            </Col>
            
                <Credits show={showCredits} setShow={setshowCredits} />
                
        </Row>
    );
}

export default ColumnComponent;