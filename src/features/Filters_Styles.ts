import styled from "styled-components";
import check from "assets/icons/whiteCheck.svg";

const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
  color: #3A3A3A;
`
const CheckboxContainer = styled.div`
  margin: 24px 0 0 20px;
`
const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #EAEAEA;
  width: 284px;
  margin-bottom: 15px;
`
const SearchImg = styled.img`
  position: absolute;
  z-index: 9999;
  top: 50px;
  left: 15px;
`

const ErrorText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #868686;
  text-align: center;
  width: 228px;
  margin: 77px 25px;
`
const ClearButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 54px;
  left: 25%;
`
const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 18px;
  height: 18px;

  input {
    opacity: 0;
    position: absolute;
    display: flex;
    cursor: pointer;
  }

  input:checked {
    & + label::before {
      content: url(${check});
      display: flex;
      justify-content: center;
      align-items: center;
      background: #00BB6D;
    }
  }
  span {
    white-space: nowrap;
  }
  label {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #3A3A3A;
    display: flex;

    &:hover {
      &::before {
        background: #00BB6D;
      }
    }
  }

  label::before {
    content: "";
    border: 1px solid #CDCDCD;
    width: 18px;
    height: 18px;
    border-radius: 15%;
    margin-right: 11px;
  }

  input:hover + label::before {
    background: #00BB6D;
  }
`
export const S = {FilterTitle, CheckboxContainer, StyledHr, CustomCheckbox, SearchImg, ErrorText, ClearButton}