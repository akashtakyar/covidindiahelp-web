import React, { useState } from "react";
import Header from "../header";
import "./custom.css";
import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import {Row, Column} from "simple-flexbox";
import { stateNamesConstant } from '../../../constants';



function SelectCategoryComponent(props) {
  console.log("props", props);

  return (
    <>
      <Header isInfo={false}/>
      <Row><Column className="back" onClick={props.onBackToSelectState}><span><img src="/images/BackButtonBlack.svg"></img></span></Column></Row>
      <Row className="category-header">
      <Column >What are you searching in {stateNamesConstant[props.state.selectedState]}?</Column>
      </Row>
      {props.state.categoryList && props.state.categoryList.length ? props.state.categoryList.map(data=>(
      <div className="option">
      <Card className="m-10" onClick={()=>{props.onSelectCategory(data.name)}}>
        <CardContent className="card-desc-container">
          <Typography className="mb-10">
          <p>
          {data.name.toUpperCase()}
          </p>
            
          </Typography>
        </CardContent>
      </Card>
      </div> )):""}
    </>
  );
}

export default SelectCategoryComponent;
