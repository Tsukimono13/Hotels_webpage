import styled from "styled-components";

type BtnPropsType = {
    color?: string
    bgColor?: string
}

export const BookingBtn = styled.button<BtnPropsType>`
  color: ${props => props.color || '#6A53F5'};
  background: ${props => props.bgColor || 'rgba(106, 83, 245, 0.1)'};
  width: 179px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 7px;
  cursor: pointer;
`