import styled from "styled-components";

type BtnPropsType = {
    width?: string
    height?: string
    color?: string
    bgColor?: string
    size?: string
    weight?: number
}

export const CustomBtn = styled.button<BtnPropsType>`
  width: ${props => props.width || '324px'};
  height: ${props => props.height || '56px'};
  border-radius: 15px;
  color: ${props => props.height || '#FFFFFF'};
  font-size: ${props => props.size || '16px'};
  font-weight: ${props => props.weight || 700};
  line-height: 21px;
  
`