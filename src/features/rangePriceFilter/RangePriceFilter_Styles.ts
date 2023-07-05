import styled from "styled-components";

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 20px;
`
const RangeBox = styled.div`
  width: 324px;
  margin-top: 15px;
`
const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
  color: #3A3A3A;
`
const Price = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid #EAEAEA;
  width: 148px;
  height: 50px;
  color: #868686;
  border-radius: 7px;
  text-align: center;
  display: flex;
  align-items: center;
  padding-left: 20px;
`
export const S = {PriceBox, RangeBox, FilterTitle, Price}