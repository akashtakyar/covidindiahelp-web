import React from 'react'
import { Row, Col, Divider } from 'antd';
import './column.css'
import 'antd/dist/antd.css';

function SignUpComponent(props) {
    return (
        <Row style={{height : "1000px"}}>

            <Col span={3} style={{borderRight : "1px solid #D5D5D5"}} >
                <Row>
                    <span className="oxygen-beds">Blood Plasma</span>
                </Row>
            </Col>
            <Col span={3}  style={{borderRight : "1px solid #D5D5D5"}} >
                <Row>
                    <span className="oxygen-beds">Medicine</span>
                </Row>
            </Col>
            <Col span={3}  style={{borderRight : "1px solid #D5D5D5"}}>
                <Row>
                    <span className="oxygen-beds">Remdisvir</span>
                </Row>
            </Col>
            <Col span={3}  style={{borderRight : "1px solid #D5D5D5"}}>
                <Row>
                    <span className="oxygen-beds">Tocilizumab</span>
                </Row>
            </Col>
            <Col span={3}  style={{borderRight : "1px solid #D5D5D5"}}>
                <Row>
                    <span className="oxygen-beds">Ventilator</span>
                </Row>
            </Col>
            <Col span={3}  style={{borderRight : "1px solid #D5D5D5"}}>
                <Row>
                    <span className="oxygen-beds">Oxygen</span>
                </Row>
            </Col>
            <Col span={3}  style={{borderRight : "1px solid #D5D5D5"}}>
                <Row>
                    <span className="oxygen-beds">Bed</span>
                </Row>
            </Col>
            <Col span={3}  style={{borderRight : "1px solid #D5D5D5"}}>
                <Row>
                    <span className="oxygen-beds">ICU</span>
                </Row>
            </Col>
        </Row>
    );
}

export default SignUpComponent;