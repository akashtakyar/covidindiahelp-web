import React from "react";
import styled from "styled-components";
import "./custom.css";
import { Row, Column } from "simple-flexbox";
import utility from "../../../utility";
import { stateNamesConstant } from "../../../constants";

const Header = styled(Row)`
  position: sticky;
  top: 35px;
`;

const HeaderText = styled(Column)`
  flex-wrap: wrap;
`;

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
  &:hover {
    box-shadow: 0 4px 7px rgb(83 115 157 / 30%);
  }
`;

const CategoryHeaderText = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const CategoryIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FindResourceText = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  gap: 4px;
  div {
    color: #acb1b4;
    text-decoration: underline;
  }
`;

const SelectCategoryComponent = (props) => (
  <>
    <Header flex="1" justifyContent="space-between" className="category-header">
      <Column
        className="back cursor-pointer"
        onClick={props.onBackToSelectDistrict}
      >
        <img src="/images/BackButtonBlack.svg" alt="back" />
      </Column>
      {props.selectedDistrict == " " ? (
        <HeaderText horizontal="center">
          What are you searching in {stateNamesConstant[props.selectedState]}?
        </HeaderText>
      ) : (
        <HeaderText horizontal="center">
          What are you searching in {stateNamesConstant[props.selectedState]}/
          {utility.toSentenceCase(props.selectedDistrict)}?
        </HeaderText>
      )}

      <Column />
    </Header>
    <CategoryList>
      {props.categoryList
        ? props.categoryList.map(({ name }, idx) => (
            <CategoryContainer
              key={idx}
              onClick={() => props.onSelectCategory(name)}
            >
              <CategoryHeaderText>{name.toUpperCase()}</CategoryHeaderText>
              <CategoryIconContainer>
                <img
                  src={`/images/${name.toLowerCase().replace("/", "-")}.svg`}
                  height="60"
                  width="60"
                  alt={name.toLowerCase()}
                />
              </CategoryIconContainer>
              <FindResourceText>
                <div>Find Resource</div>
                {" > "}
              </FindResourceText>
            </CategoryContainer>
          ))
        : null}
    </CategoryList>
  </>
);

export default SelectCategoryComponent;
