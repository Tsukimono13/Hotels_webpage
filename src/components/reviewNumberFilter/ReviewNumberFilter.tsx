import React from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import styled from "styled-components";
type PropsType = {
    setReviewNumber: (number: number)=> void
}
const ReviewNumberFilter:React.FC<PropsType> = ({setReviewNumber}) => {
    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setReviewNumber(value);
        debugger
    };
    return (
        <>
            <FilterTitle>Количество отзывов (от)</FilterTitle>
            <CustomInput placeholder={'Например, от 10'} onChange={searchChangeHandler}/>
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