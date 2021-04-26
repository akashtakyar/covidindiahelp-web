import React, {useState} from 'react'
import {Row, Col} from 'antd';
import './column.css'
import Credits from './credits';
import InfoIcon from '@material-ui/icons/Info';
import RefreshIcon from '@material-ui/icons/Refresh';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function ColumnComponent(props) {

    const [showCredits, setshowCredits] = useState(false)
    return (
        <Row gutter={[24, 16]}
             style={{backgroundColor: "#474951", height: "35px", marginLeft: '0px', marginRight: '0px'}}>
            <Col className="navbar-cont" span={2.5}>
                <Row>
                    <span className="bookmarked" style={{fontSize: "12px", marginLeft: '10px'}}>Covid India Help</span>
                </Row>
            </Col>
            <Col className="navbar-cont" span={3}>
                <Row style={{marginLeft: "12px"}} id={'state-list-container'}>
                    <Autocomplete
                        id="AllStates"
                        options={props.countryStateList}
                        getOptionLabel={(option) => option.title}
                        style={{width: 250, zIndex: 100000}}
                        onInputChange={(event, value) => props.handleChangeForCountryState(event, value)}
                        renderInput={(params) => <TextField {...params} label="All States" variant="outlined"/>}
                    />
                </Row>
            </Col>
            <Col className="navbar-cont" span={16}>
                <Row onClick={props.onRefresh} style={{cursor: 'pointer'}}>
                    <span className="bookmarked" style={{fontSize: "10px"}}></span>
                </Row>
            </Col>
            <Col className="navbar-cont" span={1}>
                <Row>
                    <span className="bookmarked" style={{fontSize: "10px"}}></span>
                </Row>
            </Col>

            <Col onClick={() => setshowCredits(!showCredits)} className="navbar-cont" span={1}>
                <Row style={{cursor: 'pointer'}}>
                    <span className="bookmarked" style={{fontSize: "11px"}}><InfoIcon
                        style={{color: 'white', fontSize: '20px'}}/> </span>
                </Row>
            </Col>

            <Credits show={showCredits} setShow={setshowCredits}/>

        </Row>
    );
}

export default ColumnComponent;