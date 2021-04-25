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
        borderRight: "1px solid #D5D5D5",
        height: '95vh',
        overflowY: 'scroll', 
        overflowX: 'hidden' 
    }
    const [blood, setBlood] = useState(true)
    const [medicine, setMedicine] = useState(true)
    const [rem, setrem] = useState(true)
    const [toc, setToc] = useState(true)
    const [ven, setVen] = useState(true)
    const [oxy, setOxy] = useState(true)
    const [bed, setBed] = useState(true)
    const [icu, setIcu] = useState(true)
    const list = [
        {
            label:"Blood",
            filterKey:"plasma"
        },
        {
            label:"Remdesvir/ Tocilizumab",
            filterKey:"remdesivir",
            filterKey2:"tocilizumab"
        },
        {
            label:"Oxygen",
            filterKey:"oxygen"
        },
        {
            label:"Bed",
            filterKey:"bed"
        },
        {
            label:"Fabiflu",
            filterKey:"fabiflu"
        },
    ]

    return (
        <>
            <NavBar getStates={props.getStates} onRefresh={props.getStates} />
            <Row style={{ height: "1000px" }}>
                {
                    list.map((col)=>(
                        <Col id="style-1" xs={24} sm={12} md={4} lg={3}  style={cardStyle} >
                            <Row>
                                <Col span={20}> <span className="oxygen-beds" style={{fontSize: "12px"}}>{col.label}</span></Col>
                            </Row>
                            <Row>
                                <ColumnCard responseData={props.responseData.filter((row)=>row.category.toLowerCase()===col.filterKey||row.category.toLowerCase()===col.filterKey2)}></ColumnCard>
                            </Row>
                        </Col>
                    ))
                }
                
           
               
                
            </Row>
        </>

    );
}

export default ColumnComponent;