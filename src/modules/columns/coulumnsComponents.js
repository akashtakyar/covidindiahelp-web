import React, { useState } from 'react'
import { Row, Col } from 'antd';
import './column.css'
import 'antd/dist/antd.css';
import ColumnCard from '../column-cards';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import NavBar from './navbar'
function ColumnComponent(props) {
    const cardStyle= {
        maxWidth:'20%',
        flex:'0 0 20%', 
        borderRight: "1px solid #D5D5D5" 
    }
    const [blood, setBlood] = useState(true)
    const [medicine, setMedicine] = useState(true)
    const [rem, setrem] = useState(true)
    const [toc, setToc] = useState(true)
    const [ven, setVen] = useState(true)
    const [oxy, setOxy] = useState(true)
    const [bed, setBed] = useState(true)
    const [icu, setIcu] = useState(true)

    return (
        <>
            <NavBar getStates={props.getStates} onRefresh={props.getStates} />
            <Row style={{ height: "1000px" }}>

                <Col xs={24} sm={12} md={4} lg={3}  style={cardStyle} >
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Blood Plasma</span></Col>
                        {/* <Col span={4}> {blood ? <CaretUpOutlined onClick={() => setBlood(false)} /> : <CaretDownOutlined onClick={() => setBlood(true)} />} </Col> */}
                    </Row>
                    <Row>
                        <ColumnCard responseData={props.responseData.filter((row)=>row.category.toLowerCase()==='plasma')}></ColumnCard>
                    </Row>
                </Col>
           
                <Col xs={24} sm={12} md={4} lg={3}  style={cardStyle}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Remdisvir/ Tocilizumab</span></Col>
                        {/* <Col span={4}> {rem ? <CaretUpOutlined onClick={() => setrem(false)} /> : <CaretDownOutlined onClick={() => setrem(true)} />} </Col> */}
                    </Row>
                    <Row>
                        <ColumnCard responseData={props.responseData.filter((row)=>row.category.toLowerCase()==='remdesivir'||row.category.toLowerCase()==='tocilizumab')}></ColumnCard>
                    </Row>
                </Col>
                
                
                <Col xs={24} sm={12} md={4} lg={3}  style={cardStyle}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Oxygen</span></Col>
                        {/* <Col span={4}> {oxy ? <CaretUpOutlined onClick={() => setOxy(false)} /> : <CaretDownOutlined onClick={() => setOxy(true)} />} </Col> */}
                    </Row>
                    <Row>
                        <ColumnCard responseData={props.responseData.filter((row)=>row.category.toLowerCase()==='oxygen')}></ColumnCard>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3}  style={cardStyle}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Bed</span></Col>
                        {/* <Col span={4}> {bed ? <CaretUpOutlined onClick={() => setBed(false)} /> : <CaretDownOutlined onClick={() => setBed(true)} />} </Col> */}
                    </Row>
                    <Row>
                        <ColumnCard responseData={props.responseData.filter((row)=>row.category.toLowerCase()==='bed')}></ColumnCard>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3}  style={cardStyle}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Fabiflu</span></Col>
                        {/* <Col span={4}> {bed ? <CaretUpOutlined onClick={() => setBed(false)} /> : <CaretDownOutlined onClick={() => setBed(true)} />} </Col> */}
                    </Row>
                    <Row>
                        <ColumnCard responseData={props.responseData.filter((row)=>row.category.toLowerCase()==='fabiflu')}></ColumnCard>
                    </Row>
                </Col>
                
            </Row>
        </>

    );
}

export default ColumnComponent;