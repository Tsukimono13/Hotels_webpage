import React from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import styled from "styled-components";

type PropsType = {
    setSelectedNumReview: any
}
const ReviewNumberFilter: React.FC<PropsType> = ({setSelectedNumReview}) => {

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setSelectedNumReview(value >= 0 ? value : null);
    };

    return (
        <>
            <FilterTitle>Количество отзывов (от)</FilterTitle>
            <CustomInput placeholder={'Например, от 10'} type="text"
                         min="0"
                         onChange={handleFilterChange}/>
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