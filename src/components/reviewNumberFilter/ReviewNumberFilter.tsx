import React from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import styled from "styled-components";

const ReviewNumberFilter = () => {
    return (
        <>
            <FilterTitle>Количество отзывов (от)</FilterTitle>
            <CustomInput placeholder={'Например, от 10'}/>
        </>
    );
};

export default ReviewNumberFilter;

const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
`