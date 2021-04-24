import React, { useState } from 'react'
import { Row, Col } from 'antd';
import { Select, Radio } from 'antd';
import './column.css'
function ColumnComponent(props) {
    const { Option } = Select;
    const children = [];
    
        children.push(<Option key={"uttar"}>{"uttar"}</Option>);
        children.push(<Option key={"delhi"}>{"delhi"}</Option>);

    const [selected  , setSelected ] = useState("delhi")

    function handleChange(value) {
        setSelected(value)
        props.getStates(value)
    }
    return (
        <Row gutter={[24, 16]} style={{backgroundColor : "#474951" , height: "68px"}}>
            <Col span={3}>
                <Row style={{marginTop : "20px" , marginLeft : "12px"}}>
                    <Select style={{background : "#55575E" , color : "white"}} size={"medium"} defaultValue={selected} onChange={handleChange} style={{ width: 150 }}>
                        {children}
                    </Select>
                </Row>
            </Col>
            <Col span={3}>
                <Row style={{marginTop : "25px"}}>
                    <span className="bookmarked">Leads</span>
                </Row>
            </Col>
            <Col span={14}>
                <Row style={{marginTop : "25px"}}>
                    <span className="bookmarked">Bookmarked</span>
                </Row>
            </Col>
            <Col span={4}>
                <Row style={{marginTop : "25px"}}>
                    <span className="bookmarked">Show data of last: 4 hours</span>
                </Row>
            </Col>
        </Row>
    );
}

export default ColumnComponent;