import React from 'react'
import { Row, Col } from 'antd';
import './column.css'
import 'antd/dist/antd.css';
import ColumnCard from '../column-cards';
import Footer from "./footer";


function ColumnComponent(props) {

    return (
        <>
            <Row className="wrapOnMedia">
                {
                    props.state.list.map((col, index) => (
                        <Col id="style-1" className="cardStyle" key={index}>
                            <Row>
                                <Col span={20}>
                                    <span className="oxygen-beds" style={{ fontSize: "11px" }}>{col.label}
                                    </span>
                                </Col>
                                <Col className="left-p" onClick={() => props.handleColumnClose(col)} style={{ cursor: 'pointer' }}>
                                    <img src="/images/Cancel.svg" alt="Cancel" />
                                </Col>
                            </Row>
                            <Row className="coloumn-scroll">
                                <ColumnCard
                                    originalResponseData={props.state.originalResponseData}
                                    responseData={props.responseData.filter((row) => row.category.toLowerCase() === col.filterKey || row.category.toLowerCase() === col.filterKey2)}
                                    incrementUpVote={props.incrementUpVote}
                                    incrementDownVote={props.incrementDownVote}
                                />
                            </Row>
                        </Col>
                    ))
                }
            </Row>
            <Footer />
        </>

    );
}

export default ColumnComponent;
