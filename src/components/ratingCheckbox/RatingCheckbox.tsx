import React, {useState} from 'react';
import {FilterContainer} from "components/filterContainer/FilterContainer";
import styled from "styled-components";

const rating = ['1 звезда', '2 звезды', '3 звезды', '4 звезды', '5 звёзд']

const RatingCheckbox = () => {
    const [checkRating, setCheckRating] = useState(false)

    const changeRatingHandler = (event: any) => {
        const isChecked = event.target.checked;
        setCheckRating(isChecked)
    }
    return (
        <>
            <FilterTitle>Колличество звёзд</FilterTitle>
            <FilterContainer>
                <ul>
                    {rating.map((el, index) => <li key={index}>
                        <label>
                            <Checkbox type="checkbox" onChange={changeRatingHandler}/>
                            {el}
                        </label>
                    </li>)}
                </ul>
            </FilterContainer>
        </>
    );
};

export default RatingCheckbox;
const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  border: 1px solid #CDCDCD;
  margin: 0 10px 15px 20px;
`
const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
`