import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Select, Radio } from 'antd';
import './column.css'
function ColumnComponent(props) {
    const { Option } = Select;
    const children = [];
    children.push(<Option key={""}>{"All"}</Option>);
    children.push(<Option key={"andhra"}>{"Andhra Pradesh"}</Option>);
    children.push(<Option key={"arunachal"}>{"Arunachal Pradesh"}</Option>);
    children.push(<Option key={"assam"}>{"Assam"}</Option>);
    children.push(<Option key={"bihar"}>{"Bihar"}</Option>);
    children.push(<Option key={"chhattisgarh"}>{"Chhattisgarh"}</Option>);
    children.push(<Option key={"goa"}>{"Goa"}</Option>);
    children.push(<Option key={"gujarat"}>{"Gujarat"}</Option>);
    children.push(<Option key={"haryana"}>{"Haryana"}</Option>);
    children.push(<Option key={"himachal"}>{"Himachal Pradesh"}</Option>);
    children.push(<Option key={"jharkhand"}>{"Jharkhand"}</Option>);
    children.push(<Option key={"karnataka"}>{"Karnataka"}</Option>);
    children.push(<Option key={"kerala"}>{"Kerala"}</Option>);
    children.push(<Option key={"madhya"}>{"Madhya Pradesh"}</Option>);
    children.push(<Option key={"maharashtra"}>{"Maharashtra"}</Option>);
    children.push(<Option key={"manipur"}>{"Manipur"}</Option>);
    children.push(<Option key={"meghalaya"}>{"Meghalaya"}</Option>);
    children.push(<Option key={"mizoram"}>{"Mizoram"}</Option>);
    children.push(<Option key={"nagaland"}>{"Nagaland"}</Option>);
    children.push(<Option key={"odisha"}>{"Odisha"}</Option>);
    children.push(<Option key={"punjab"}>{"Punjab"}</Option>);
    children.push(<Option key={"rajasthan"}>{"Rajasthan"}</Option>);
    children.push(<Option key={"sikkim"}>{"Sikkim"}</Option>);
    children.push(<Option key={"tamil"}>{"Tamil Nadu"}</Option>);
    children.push(<Option key={"telangana"}>{"Telangana"}</Option>);
    children.push(<Option key={"tripura"}>{"Tripura"}</Option>);
    children.push(<Option key={"uttarakhand"}>{"Uttarakhand"}</Option>);
    children.push(<Option key={"uttar"}>{"Uttar Pradesh"}</Option>);
    children.push(<Option key={"bengal"}>{"West Bengal"}</Option>);
    children.push(<Option key={"andaman"}>{"Andaman And Nicobar Islands"}</Option>);
    children.push(<Option key={"chandigarh"}>{"Chandigarh"}</Option>);
    children.push(<Option key={"delhi"}>{"Delhi"}</Option>);
    children.push(<Option key={"jammu"}>{"Jammu & Kashmir"}</Option>);
    children.push(<Option key={"ladakh"}>{"Ladakh"}</Option>);
    children.push(<Option key={"lakshadweep"}>{"Lakshadweep"}</Option>);
    children.push(<Option key={"puducherry"}>{"Puducherry"}</Option>)

    const [selected  , setSelected ] = useState("Delhi")

    function handleChange(value) {
        setSelected(value)
        props.getStates(value)
    }
    return (
        <Row gutter={[24, 16]} style={{backgroundColor : "#474951" , height: "55px",marginLeft:'0px',marginRight:'0px'}}>
             <Col span={2.5}>
                <Row style={{marginTop : "17px"}}>
                    <span className="bookmarked" style={{fontSize: "12px",marginLeft:'10px'}}>Covid India Help</span>
                </Row>
            </Col>
            <Col span={3}>
                <Row style={{marginTop : "10px" , marginLeft : "12px"}}>
                    <Select style={{background : "#55575E" , color : "white"}} size={"medium"} defaultValue={selected} onChange={handleChange} style={{ width: 150 }}>
                        {children}
                    </Select>
                </Row>
            </Col>
            <Col span={1}>
                <Row style={{marginTop : "17px"}}>
                    <span className="bookmarked" style={{fontSize: "12px"}}>Leads</span>
                </Row>
            </Col>
            <Col span={12}>
                <Row style={{marginTop : "17px"}}>
                    <span className="bookmarked" style={{fontSize: "12px"}}>Bookmarked</span>
                </Row>
            </Col>
            <Col span={4}>
                <Row style={{marginTop : "17px"}}>
                    <span className="bookmarked" style={{fontSize: "12px"}}>Show data of last: 4 hours</span>
                </Row>
            </Col>
            <Col span={1}>
                <Row onClick={props.onRefresh} style={{marginTop : "17px",cursor:'pointer'}}>
                    <span className="bookmarked" style={{fontSize: "12px"}}><svg style={{fill:'white'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/></svg></span>
                </Row>
            </Col>
        </Row>
    );
}

export default ColumnComponent;