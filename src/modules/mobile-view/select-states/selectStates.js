import React, { useState } from "react";
import "../../columns/column.css";
import { Column, Row } from "simple-flexbox";
import { stateNamesConstant } from "../../../constants";

function SelectStates(props) {
  return (
    <>
      <Row className="message-top-screen">
        <Column>
          Find covid related supplies information. Click on the state name from
          the list below:
          {/*    <span><img className="search-image p-r-10" src="/images/search.svg"></img>   */}
          {/*<input placeholder="Search Location" className="search-location" onChange={(event)=>{props.handleSearchLocationInput(event.target.value.trim())}}></input>*/}
          {/*</span>*/}
        </Column>
      </Row>
      {props.countryStateList && props.countryStateList.length > 0
        ? props.countryStateList.map((location) => (
            <>
              {location && location.name && location.name.length ? (
                <Row
                  className="location-row"
                  onClick={() => {
                    props.onSelectLocation(location.name);
                  }}
                >
                  <Column className="location-column">
                    {stateNamesConstant[location.name]}
                  </Column>
                </Row>
              ) : (
                ""
              )}
            </>
          ))
        : ""}
      <div className="hidden-div">.</div>
    </>
  );
}

export default SelectStates;
