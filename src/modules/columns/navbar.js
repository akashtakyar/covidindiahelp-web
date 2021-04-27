import React, {useState} from 'react'
import './column.css'
import Credits from './credits';
import InfoIcon from '@material-ui/icons/Info';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Column, Row} from "simple-flexbox";
const stateNames = {andhra: "Andhra Pradesh",arunachal: "Arunachal Pradesh",assam: "Assam",bihar: "Bihar",chandigarh: "Chandigarh",chhattisgarh: "Chhattisgarh",dadra: "Dadra and Nagar Haveli",daman: "Daman and Diu",delhi: "Delhi",goa: "Goa",gujarat: "Gujarat",haryana: "Haryana",himachal: "Himachal",jammu: "Jammu",jharkhand: "Jharkhand",karnataka: "Karnataka",kerala: "Kerala",lakshadweep: "Lakshadweep",madhya: "Madhya Pradesh",maharashtra: "Maharashtra",manipur: "Manipur",meghalaya: "Meghalaya",mizoram: "Mizoram",nagaland: "Nagaland",odisha: "Odisha",puducherry: "Puducherry",punjab: "Punjab",rajasthan: "Rajasthan",sikkim: "Sikkim",tamil: "Tamil Nadu",telangana: "Telangana",tripura: "Tripura",uttarakhand: "Uttarakhand",uttar: "Uttar Pradesh",bengal: "West Bengal"}

function ColumnComponent(props) {

    const [showCredits, setshowCredits] = useState(false)
    return (
        <Row
            style={{
                backgroundColor: "#474951",
                height: "35px",
                marginLeft: '0px',
                marginRight: '0px',
                alignItems: 'center',
                justifyContent: "space-between"
            }}>
            <Column className="navbar-cont">
                <Row style={{height: "100%", alignItems: 'center', columnGap: '5px'}}>
                <Column className="bookmarked" style={{fontSize: "10px", cursor: 'pointer'}}>
                        <img src="/images/refresh_48px.svg" alt={'Refresh'} width={'24px'} onClick={() => props.drawerToggleClickHandler()}/>
                    </Column>
                    <Column className="bookmarked" style={{fontSize: "12px", marginLeft: '10px'}}>Covid India
                        Help</Column>
                    <Column style={{marginLeft: "12px"}} id={'state-list-container'}>
                        <Autocomplete
                            id="AllStates"
                            options={props.countryStateList}
                            getOptionLabel={(option) => option.title}
                            style={{width: 160, zIndex: 100000}}
                            onInputChange={(event, value) => props.handleChangeForCountryState(event, value)}
                            renderInput={(params) => <TextField {...params} label="All States" variant="outlined"/>}
                        />
                    </Column>
                    <Column className="bookmarked" style={{fontSize: "10px", cursor: 'pointer'}}>
                        <img src="/images/refresh_48px.svg" alt={'Refresh'} width={'24px'} onClick={() => props.onRefresh('')}/>
                    </Column>
                </Row>
            </Column>
            <Column onClick={() => setshowCredits(!showCredits)} className="navbar-cont">
                <Row className="bookmarked"
                     style={{fontSize: "11px", cursor: 'pointer', paddingRight: '10px', position: 'relative'}}><InfoIcon
                    style={{color: 'white', fontSize: '20px'}}/> </Row>
                <Credits show={showCredits} setShow={setshowCredits}/>
            </Column>
        </Row>
    );
}

export default ColumnComponent;