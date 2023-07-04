import styled from "styled-components";

const MainContainer = styled.div`
  border-radius: 15px;
  border: 1px solid #EAEAEA;
  width: 835px;
  height: 457px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ClearBtn = styled.button`
  width: 240px;
  height: 50px;
  background: rgba(98, 77, 227, 0.1);;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #6A53F5;
  border-radius: 15px;
  cursor: pointer;
`
const NotFoundTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
  color: #3A3A3A;
  margin: 34px 0 8px 0;
`
const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: #969696;
  margin-bottom: 23px;
`
const ContentContainer = styled.div`
  width: 344px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const S = {MainContainer, ClearBtn, NotFoundTitle, Description, ContentContainer}