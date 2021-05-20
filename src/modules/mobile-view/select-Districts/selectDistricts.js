import React from "react";
import "../../columns/column.css";
import utility from "../../../utility";
import { Column, Row } from "simple-flexbox";

function SelectDistricts(props) {
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  return (
    <>
      <Row className="message-top-screen">
        <Column>
          Find covid related supplies information. Click on the state name from
          the list below:
        </Column>
      </Row>
      <Row
        className="location-row"
        onClick={() => {
          props.onSelectDistrict(" ");
        }}
      >
        <Column>View Information from all Districts</Column>
      </Row>
      {props.stateDistrictList && props.stateDistrictList.length > 0
        ? props.stateDistrictList.map((location) => (
            <>
              {location && location.name && location.name.length ? (
                <Row
                  className="location-row"
                  onClick={() => {
                    props.onSelectDistrict(location.name);
                  }}
                >
                  {!location.visibleName && location.visibleName == null ? (
                    <Column className="location-column">
                      {titleCase(location.name)}
                    </Column>
                  ) : (
                    <Column className="location-column">
                      {titleCase(location.visibleName)}
                    </Column>
                  )}
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

export default SelectDistricts;
