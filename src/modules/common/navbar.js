import React, {useState} from 'react'
import '../columns/column.css'
import Credits from '../columns/./credits';
import InfoIcon from '@material-ui/icons/Info';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Column, Row} from "simple-flexbox";
import {stateNamesConstant} from '../../constants'

function NavbarComponent(props) {
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
                <Column className="drawericon" style={{fontSize: "10px", cursor: 'pointer'}}>
                        <img src="/images/drawer-white.png" alt={'Refresh'} width={'24px'} onClick={() => props.drawerToggleClickHandler()}/>
                    </Column>
                    <Column className="bookmarked" style={{fontSize: "12px", marginLeft: '10px'}}>Covid India
                        Help</Column>
                        {props.isHeader?<>
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
                    <Column style={{marginLeft: "12px"}} id={'state-list-container'}>
                        <Autocomplete
                            id="AllCategories"
                            options={props.state.categoryList}
                            getOptionLabel={(option) => option.name}
                            style={{width: 160, zIndex: 100000}}
                            onInputChange={(event, value) => props.handleChangeForCategory(event, value)}
                            renderInput={(params) => <TextField {...params} label="All Categories" variant="outlined"/>}
                        />
                    </Column>
                    <Column className="bookmarked" style={{fontSize: "10px", cursor: 'pointer'}}>
                        <img src="/images/refresh_48px.svg"
                        style={{filter: 'invert(100%) sepia(0%) saturate(2%) hue-rotate(282deg) brightness(105%) contrast(101%)'}}
                        alt={'Refresh'} width={'24px'} onClick={() => props.onRefresh('')}/>
                    </Column>
                    </>:
                    ""
                        }
                </Row>
            </Column>
            {props.isHeader?<>
            <Column onClick={() => setshowCredits(!showCredits)} className="navbar-cont">
                <Row className="bookmarked"
                     style={{fontSize: "11px", cursor: 'pointer', paddingRight: '10px', position: 'relative'}}><InfoIcon
                    style={{color: 'white', fontSize: '20px'}}/> </Row>
                <Credits show={showCredits} setShow={setshowCredits}/>
            </Column>
            </> : ""}
        </Row>
    );
}

export default NavbarComponent;
