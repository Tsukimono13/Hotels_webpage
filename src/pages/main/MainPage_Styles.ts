import styled from "styled-components";

const Main = styled.div`
  min-height: 100vh;
  background: #ffffff;
`
const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  height: 100%;
  margin: 40px 0 35px;
  position: relative;
`
const ConfirmBtn = styled.button`
  width: 324px;
  height: 56px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #FFFFFF;
  background: #6A53F5;
  margin: 40px 0 15px;
  cursor: pointer;
`
const CanselBtn = styled.button`
  width: 324px;
  height: 56px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  border: 1px solid #EAEAEA;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`
const Advertisements = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  cursor: pointer;
`
export const S = {Main, Wrapper, ConfirmBtn, CanselBtn, Advertisements}