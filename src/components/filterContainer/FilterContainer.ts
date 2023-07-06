import styled from "styled-components";

type ContainerPropsType = {
    height?: string
    margin?: string
    width?: string
}

export const FilterContainer = styled.div<ContainerPropsType>`
  width: ${props => props.width || '325px'};
  height: ${props => props.height || '202px'};
  margin: ${props => props.margin || '13px 0 26px'};
  border-radius: 15px;
  border: 1px solid #EAEAEA;
`