import React from "react";
import styled from "styled-components"
import "./custom.css";
import { Row, Column } from "simple-flexbox";
import { stateNamesConstant } from '../../../constants';

const CategoryList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 600px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 15px;
    gap: 15px;
`;

const CategoryContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 150px;
    box-shadow: 0 3px 6px rgb(83 115 157 / 10%);
    border-radius: 10px;
    padding: 15px;
    background-color: #f8f8f8;
    font-weight: bold;
    cursor: pointer;
    @media screen and (max-width: 760px) {
        max-width: 100%;
    }
    &:hover{
        box-shadow: 0 4px 7px rgb(83 115 157 / 30%);
    }
`;

function SelectCategoryComponent(props) {
    return (
        <>
            <Row flex="1" className="category-header">
                <Column horizontal="left" className="back" onClick={props.onBackToSelectState}><span>
                    <img src="/images/BackButtonBlack.svg" alt="covid19" /></span></Column>
                <Column flex="1" horizontal="center" style={{ marginLeft: -35 }}>
                    What are you searching in {stateNamesConstant[props.selectedState]}?
                </Column>
            </Row>
            <CategoryList>
                {props.categoryList ? props.categoryList.map(({ name }, idx) => (
                    <CategoryContainer key={idx} onClick={() => props.onSelectCategory(name)}>
                        {name.toUpperCase()}
                    </CategoryContainer>
                )) : null}
            </CategoryList>

            <div className="hidden-div">.</div>
        </>
    );
}

export default SelectCategoryComponent;
