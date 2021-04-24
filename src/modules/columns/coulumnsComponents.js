import React, { useState } from 'react'
import { Row, Col } from 'antd';
import './column.css'
import 'antd/dist/antd.css';
import ColumnCard from '../column-cards';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import NavBar from './navbar'
function ColumnComponent(props) {

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
            <NavBar getStates={props.getStates}/>
            <Row style={{ height: "1000px" }}>

                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }} >
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Blood Plasma</span></Col>
                        {/* <Col span={4}> {blood ? <CaretUpOutlined onClick={() => setBlood(false)} /> : <CaretDownOutlined onClick={() => setBlood(true)} />} </Col> */}
                    </Row>
                   
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }} >
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Medicine</span></Col>
                        {/* <Col span={4}> {medicine ? <CaretUpOutlined onClick={() => setMedicine(false)} /> : <CaretDownOutlined onClick={() => setMedicine(true)} />} </Col> */}
                    </Row>

                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Remdisvir</span></Col>
                        {/* <Col span={4}> {rem ? <CaretUpOutlined onClick={() => setrem(false)} /> : <CaretDownOutlined onClick={() => setrem(true)} />} </Col> */}
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Tocilizumab</span></Col>
                        {/* <Col span={4}> {toc ? <CaretUpOutlined onClick={() => setToc(false)} /> : <CaretDownOutlined onClick={() => setToc(true)} />} </Col> */}
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Ventilator</span></Col>
                        {/* <Col span={4}> {ven ? <CaretUpOutlined onClick={() => setVen(false)} /> : <CaretDownOutlined onClick={() => setVen(true)} />} </Col> */}

                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Oxygen</span></Col>
                        {/* <Col span={4}> {oxy ? <CaretUpOutlined onClick={() => setOxy(false)} /> : <CaretDownOutlined onClick={() => setOxy(true)} />} </Col> */}
                    </Row>
                    <Row>
                        <ColumnCard responseData={props.responseData}></ColumnCard>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>Bed</span></Col>
                        {/* <Col span={4}> {bed ? <CaretUpOutlined onClick={() => setBed(false)} /> : <CaretDownOutlined onClick={() => setBed(true)} />} </Col> */}
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>ICU</span></Col>
                        {/* <Col span={4}> {icu ? <CaretUpOutlined onClick={() => setIcu(false)} /> : <CaretDownOutlined onClick={() => setIcu(true)} />} </Col> */}
                    </Row>
                </Col>
            </Row>
        </>

    );
}

export default ColumnComponent;