import styled from "styled-components";

type InputPropsType = {
    paddingL?: string
    width?: string
    marginB?: string
}

export const CustomInput = styled.input<InputPropsType>`
  width: ${props => props.width || '325px'};
  height: 50px;
  border: 1px solid #EAEAEA;
  border-radius: 7px;
  margin-top: 14px;
  margin-bottom: ${props => props.marginB || '25px'};
  padding-left: 13px;
  
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #868686;
    padding-left: ${props => props.paddingL || '7px'};
  }
`