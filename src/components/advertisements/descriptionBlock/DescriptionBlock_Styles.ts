import styled from "styled-components";

const InfoBlock = styled.div`
  width: 560px;
  margin: 25px 0 28px 25px;
`
const HotelTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 6px;
  color: #3A3A3A;
`
const TypeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #868686;
  position: relative;
  margin: 0 6px 0 15px;
`
const Dot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #868686;
`
const DescriptionBox = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: center;
`
const Review = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #868686;
  margin: 0 15px 0 8px;
`
const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #3A3A3A;
`
const HotelDescription = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  min-width: 560px;
  color: #3A3A3A;
`
export const S = {InfoBlock, HotelTitle, TypeText, Dot, DescriptionBox, Review, Location, HotelDescription}