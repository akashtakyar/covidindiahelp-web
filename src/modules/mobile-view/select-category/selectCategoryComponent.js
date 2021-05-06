import React from "react";
import styled from "styled-components"
import "./custom.css";
import { Row, Column } from "simple-flexbox";
import { stateNamesConstant } from '../../../constants';

const CategoryHeader = styled(Row)`
    position: sticky;
    top: 35px;
`

const CategoryList = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 600px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px auto;
    padding: 15px;
    gap: 15px;
`;

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 275px;
    height: 150px;
    box-shadow: 0 3px 6px rgb(83 115 157 / 10%);
    border-radius: 10px; 
    padding: 15px;
    cursor: pointer;
    @media screen and (max-width: 760px) {
        max-width: 100%;
    }
    &:hover{
        box-shadow: 0 4px 7px rgb(83 115 157 / 30%);
    }
`;

const CategoryHeaderText = styled.div`
    font-weight: bold;
    font-size: 16px;
`

const CategoryIconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const FindResourceText = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 13px;
    gap: 4px;
    div {
        color:#acb1b4;
        text-decoration: underline;
    }
`

function SelectCategoryComponent(props) {
    console.log("props.categoryList", props.categoryList)
    return (
        <>
            <CategoryHeader flex="1" className="category-header">
                <Column horizontal="left" className="back" onClick={props.onBackToSelectState}><span>
                    <img src="/images/BackButtonBlack.svg" alt="covid19" /></span></Column>
                <Column flex="1" horizontal="center" style={{ marginLeft: -35 }}>
                    What are you searching in {stateNamesConstant[props.selectedState]}?
                </Column>
            </CategoryHeader>
            <CategoryList>
                {props.categoryList ? props.categoryList.map(({ name, _id }, idx) => (
                    <CategoryContainer key={_id} onClick={() => props.onSelectCategory(name)}>
                        <CategoryHeaderText>{name.toUpperCase()}</CategoryHeaderText>
                        <CategoryIconContainer>
                            <img src={`/images/${name.toLowerCase().replace('/', '-')}.svg`} height="60" width="60" alt={name.toLowerCase()} />
                        </CategoryIconContainer>
                        <FindResourceText>
                            <div>
                                Find Resource
                            </div>
                            {" > "}
                        </FindResourceText>
                    </CategoryContainer>
                )) : null}
            </CategoryList>

            <div className="hidden-div">.</div>
        </>
    );
}

export default SelectCategoryComponent;
