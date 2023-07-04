import React from 'react';
import {FilterContainer} from "components/filterContainer/FilterContainer";
import styled from "styled-components";
import check from "assets/icons/whiteCheck.svg";

type PropsType = {
    selectedStars: number[]
    setSelectedStars: any
}

type StarsType = {
    num: number
    title: string
}

const stars: StarsType[] = [
    {num: 1, title: "звезда"},
    {num: 2, title: "звезды"},
    {num: 3, title: "звезды"},
    {num: 4, title: "звезды"},
    {num: 5, title: "звезд"}
]

const RatingCheckbox: React.FC<PropsType> = ({selectedStars, setSelectedStars}) => {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const starNumber = parseInt(event.target.value);
        if (event.target.checked) {
            setSelectedStars((prevSelectedStars: number[]) => [...prevSelectedStars, starNumber]);
        } else {
            setSelectedStars((prevSelectedStars: number[]) =>
                prevSelectedStars.filter((star: number) => star !== starNumber)
            );
        }
    };
    return (
        <>
            <FilterTitle>Колличество звёзд</FilterTitle>
            <FilterContainer>
                <CheckboxContainer>
                    <ul>
                        {stars.map((el: StarsType, index) => (
                            <CustomCheckbox>
                                <li key={index}>
                                    <input type="checkbox"
                                           value={el.num}
                                           checked={selectedStars.includes(el.num)}
                                           onChange={handleCheckboxChange}/>
                                    <label>
                                        <span>{el.num} {el.title}</span>
                                    </label>
                                </li>
                            </CustomCheckbox>
                        ))}
                    </ul>
                </CheckboxContainer>
            </FilterContainer>
        </>
    );
};

export default RatingCheckbox;

const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
`
const CheckboxContainer = styled.div`
  margin: 24px 0 0 20px;
`
const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 18px;
  height: 18px;

  input {
    opacity: 0;
    position: absolute;
    display: flex;
    cursor: pointer;
  }

  input:checked {
    & + label::before {
      content: url(${check});
      display: flex;
      justify-content: center;
      align-items: center;
      background: #00BB6D;
    }
  }


  label {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    display: flex;

    span {
      white-space: nowrap;
    }

    &:hover {
      &::before {
        background: #00BB6D;
      }
    }
  }

  label::before {
    content: "";
    border: 1px solid #CDCDCD;
    width: 18px;
    height: 18px;
    border-radius: 15%;
    margin-right: 11px;
  }

  input:hover + label::before {
    background: #00BB6D;
  }
`;