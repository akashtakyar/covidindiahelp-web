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
            <NavBar />
            <Row style={{ height: "1000px" }}>

                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }} >
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">Blood Plasma</span></Col>
                        {/* <Col span={4}> {blood ? <CaretUpOutlined onClick={() => setBlood(false)} /> : <CaretDownOutlined onClick={() => setBlood(true)} />} </Col> */}
                    </Row>
                    <Row>
                        <ColumnCard></ColumnCard>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }} >
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">Medicine</span></Col>
                        {/* <Col span={4}> {medicine ? <CaretUpOutlined onClick={() => setMedicine(false)} /> : <CaretDownOutlined onClick={() => setMedicine(true)} />} </Col> */}
                    </Row>

                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">Remdisvir</span></Col>
                        {/* <Col span={4}> {rem ? <CaretUpOutlined onClick={() => setrem(false)} /> : <CaretDownOutlined onClick={() => setrem(true)} />} </Col> */}
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">Tocilizumab</span></Col>
                        {/* <Col span={4}> {toc ? <CaretUpOutlined onClick={() => setToc(false)} /> : <CaretDownOutlined onClick={() => setToc(true)} />} </Col> */}
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">Ventilator</span></Col>
                        {/* <Col span={4}> {ven ? <CaretUpOutlined onClick={() => setVen(false)} /> : <CaretDownOutlined onClick={() => setVen(true)} />} </Col> */}

                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">Oxygen</span></Col>
                        {/* <Col span={4}> {oxy ? <CaretUpOutlined onClick={() => setOxy(false)} /> : <CaretDownOutlined onClick={() => setOxy(true)} />} </Col> */}
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">Bed</span></Col>
                        {/* <Col span={4}> {bed ? <CaretUpOutlined onClick={() => setBed(false)} /> : <CaretDownOutlined onClick={() => setBed(true)} />} </Col> */}
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={4} lg={3} xl={3} style={{ borderRight: "1px solid #D5D5D5" }}>
                    <Row style={{ marginTop: "10px" }}>
                        <Col span={20}> <span className="oxygen-beds">ICU</span></Col>
                        {/* <Col span={4}> {icu ? <CaretUpOutlined onClick={() => setIcu(false)} /> : <CaretDownOutlined onClick={() => setIcu(true)} />} </Col> */}
                    </Row>
                </Col>
            </Row>
        </>

    );
}

export default ColumnComponent;