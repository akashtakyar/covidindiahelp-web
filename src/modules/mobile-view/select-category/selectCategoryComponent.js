import React from "react";
import "./custom.css";
import {Card, CardContent, Typography} from "@material-ui/core";
import {Row, Column} from "simple-flexbox";
import {stateNamesConstant} from '../../../constants';

function SelectCategoryComponent(props) {
    console.log('Class: SelectCategoryComponent, Function: SelectCategoryComponent ==', props);
    return (
        <>
        <Row className="selected-param">
        <Column style={{ width: "100%" }}>
          <Row
            justifyContent="space-between"
            alignItems="center"
            style={{ width: "100%" }}
          >
            <span>
            <img src="/images/BackButtonBlack.svg" alt="covid19" onClick={props.onBackToSelectState}/>
            </span>
            <span className="selection">
            What are you searching in {stateNamesConstant[props.selectedState]}?
          </span>
            <span className="selection">
            
          </span>
          </Row>
          
        </Column>
      </Row>
            {/* <Row className="category-header"><Column className="back" onClick={props.onBackToSelectState}><span>
                <img src="/images/BackButtonBlack.svg" alt="covid19"/></span></Column>
                <Column>What are you searching in {stateNamesConstant[props.selectedState]}?</Column></Row> */}
            {/* <Row className="category-header">
                <Column>What are you searching in {stateNamesConstant[props.selectedState]}?</Column>
            </Row> */}
            {props.categoryList ? props.categoryList.map(data => (
                <div className="option">
                    <Card className="m-10 select-category" onClick={() => {
                        props.onSelectCategory(data.name)
                    }}>
                        <CardContent className="card-desc-container">
                            <Typography className="mb-10">
                                <p>
                                    {data.name.toUpperCase()}
                                </p>

                            </Typography>
                        </CardContent>
                    </Card>
                </div>)) : ""}
                <div className="hidden-div">.</div>
        </>
    );
}

export default SelectCategoryComponent;
