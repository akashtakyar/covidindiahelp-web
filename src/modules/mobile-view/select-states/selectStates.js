import React, {useState} from 'react'
import '../../columns/column.css'
import {Column, Row} from "simple-flexbox";
import { stateNamesConstant } from '../../../constants';

function SelectStates(props) {
    return (
        <>
            <Row className="search-location-row">
                <Column className="search-row">
                    <span><img className="search-image p-r-10" src="/images/search.svg"></img>   
                <input placeholder="Search Location" className="search-location" onChange={(event)=>{props.handleSearchLocationInput(event.target.value)}}></input>
                </span>
                </Column>
            </Row>
            {props.countryStateList && props.countryStateList.length >0 ? props.countryStateList.map(location=>(
                <>
                {location && location.name && location.name.length ?
                    <Row className="location-row" onClick={()=>{props.onSelectLocation(location.name)}}>
                   <Column className="location-column">
                        {stateNamesConstant[location.name]}
                   </Column>
                   </Row> : ""}
                   </>
            ))
            
         : ""}
        </>
    );
}

export default SelectStates;