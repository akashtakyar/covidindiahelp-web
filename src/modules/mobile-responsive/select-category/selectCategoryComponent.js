import React, { useState } from "react";
import Header from "./navbar";
import "./custom.css";
import { Avatar, Card, CardContent, Typography } from "@material-ui/core";

function SelectCategoryComponent(props) {
  console.log("props", props);

  return (
    <>
      <Header />
      <div className="main">What are you searching in Delhi?</div>
      <div className="option">
      <Card className="m-10">
        <CardContent className="card-desc-container">
          <Typography className="mb-10">
          <p>
          Oxygen
          </p>
            
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div className="option">
      <Card className="m-10">
        <CardContent className="card-desc-container">
          <Typography className="mb-10">
          <p>
          Blood Plasma
          </p>
            
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div className="option">
      <Card className="m-10">
        <CardContent className="card-desc-container">
          <Typography className="mb-10">
          <p>
          Hospital Beds
          </p>
            
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div className="option">
      <Card className="m-10">
        <CardContent className="card-desc-container">
          <Typography className="mb-10">
          <p>
          Remdesivir
          </p>
            
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div className="option">
      <Card className="m-10">
        <CardContent className="card-desc-container">
          <Typography className="mb-10">
          <p>
          FabiFlu
          </p>
            
          </Typography>
        </CardContent>
      </Card>
      </div>
      <div className="option">
      <Card className="m-10">
        <CardContent className="card-desc-container">
          <Typography className="mb-10">
          <p>
          ICU
          </p>
            
          </Typography>
        </CardContent>
      </Card>
      </div>
    </>
  );
}

export default SelectCategoryComponent;
