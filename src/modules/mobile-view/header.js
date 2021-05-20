import React, { useState } from "react";
import "../columns/column.css";
import Credits from "../columns/credits";
import { history } from "../../managers/history";

import { Column, Row } from "simple-flexbox";
import { genericConstants } from "../../constants";

function NavbarComponent(props) {
  const [showCredits, setshowCredits] = useState(false);
  return (
    <Row
      style={{
        backgroundColor: "#000",
        height: "45px",
        marginLeft: "0px",
        marginRight: "0px",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
      }}
    >
      <Column>
        <Column
          className="navbar-cont cursor-pointer"
          onClick={() => {
            history.push("/");
            if (props.toggleState)
              props.toggleState(
                "selectedComponent",
                genericConstants.WEB_COMPONENT_TYPE.STATE
              );
          }}
        >
          <Row
            style={{ height: "100%", alignItems: "center", columnGap: "5px" }}
          >
            <Column
              className="bookmarked"
              style={{ fontSize: "14px", marginLeft: "10px" }}
            >
              MissionHumane.org
            </Column>
          </Row>
        </Column>
      </Column>

      <Column>
        <Column className="navbar-cont">
          <Row className="bookmarked" style={{ cursor: "pointer" }}>
            {props.isInfo ? (
              <>
                <button
                  className="volunteer-button"
                  onClick={() =>
                    window.open("https://app.missionhumane.org/volunteer")
                  }
                >
                  Volunteer
                </button>
                <img
                  onClick={() =>
                    window.open("https://forms.gle/5LhpNqX1vCYb671P7")
                  }
                  className="header-icons"
                  src="/images/add.svg"
                />
                <img
                  className="header-icons"
                  src="/images/info.svg"
                  onClick={() => setshowCredits(!showCredits)}
                />
              </>
            ) : (
              <img
                className="header-icons"
                src="/images/info.svg"
                onClick={() => setshowCredits(!showCredits)}
              />
            )}
          </Row>
          <Credits show={showCredits} setShow={setshowCredits} />
        </Column>
      </Column>
    </Row>
  );
}

export default NavbarComponent;
