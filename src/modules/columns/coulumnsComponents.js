import React, {useState} from 'react'
import {Row, Col} from 'antd';
import './column.css'
import 'antd/dist/antd.css';
import ColumnCard from '../column-cards';
import {CaretDownOutlined, CaretUpOutlined} from '@ant-design/icons';
import NavBar from './navbar'
import Footer from "./footer";

function ColumnComponent(props) {
    const cardStyle = {
        minWidth: '250px',
        maxWidth: '20%',
        flex: '0 0 20%',
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
    // const list = [
    //     {
    //         label: "Oxygen",
    //         filterKey: "oxygen"
    //     },
    //     {
    //         label: "Bed",
    //         filterKey: "bed"
    //     },
    //     {
    //         label: "Blood Plasma",
    //         filterKey: "plasma"
    //     },
    //     {
    //         label: "Remdesivir/Tocilizumab",
    //         filterKey: "remdesivir",
    //         filterKey2: "tocilizumab"
    //     },
    //     {
    //         label: "Fabiflu",
    //         filterKey: "fabiflu"
    //     },
    // ]

    return (
        <>
            <NavBar handleChangeForCountryState={props.handleChangeForCountryState} onRefresh={props.getStates}
                    countryStateList={props.state.countryStateList}
            />
            <Row className="wrapOnMedia">
                {
                    props.state.list.map((col, index) => (
                        <Col id="style-1" className="cardStyle" key={index}>
                            <Row>
                                <Col span={20}> <span className="oxygen-beds"
                                                      style={{fontSize: "11px"}}>{col.label}</span>
                                                      </Col>
                                                      <Col className="left-p" onClick={() => props.handleColumnClose(col)} style={{cursor: 'pointer'}}><img
                        src="/images/Cancel.svg"/> </Col>
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
            <Footer/>
        </>

    );
}

export default ColumnComponent;