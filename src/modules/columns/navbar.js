import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Select, Radio } from 'antd';
import './column.css'
function ColumnComponent(props) {
    const { Option } = Select;
    const children = [];
    
        children.push(<Option key={"uttar"}>{"Uttar Pradesh"}</Option>);
        children.push(<Option key={"delhi"}>{"Delhi"}</Option>);

    const [selected  , setSelected ] = useState("Delhi")

    function handleChange(value) {
        setSelected(value)
        props.getStates(value)
    }
    return (
        <Row gutter={[24, 16]} style={{backgroundColor : "#474951" , height: "55px"}}>
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
            <Col span={16}>
                <Row style={{marginTop : "17px"}}>
                    <span className="bookmarked" style={{fontSize: "12px"}}>Bookmarked</span>
                </Row>
            </Col>
            <Col span={4}>
                <Row style={{marginTop : "17px"}}>
                    <span className="bookmarked" style={{fontSize: "12px"}}>Show data of last: 4 hours</span>
                </Row>
            </Col>
        </Row>
    );
}

export default ColumnComponent;