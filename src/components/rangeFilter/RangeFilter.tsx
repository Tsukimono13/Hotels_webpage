import React, {useState} from 'react';
import styled from "styled-components";
import ReactSlider from 'react-slider'
import "./RangeFilter.css"

const MIN = 0;
const MAX = 100500;
const RangeFilter = () => {

    const [values, setValues] = useState<[number, number]>([MIN, MAX]);

    const handleSliderChange = (newValues: number | number[]) => {
        if (Array.isArray(newValues)) {
            setValues(newValues as [number, number]);
        }
    };
    //console.log('values', values)
    return (
        <>
            <FilterTitle>Цена</FilterTitle>
            <RangeBox>
                <PriceBox>
                <Price>от {values[0]} ₽</Price><span>-</span><Price>до {values[1]} ₽</Price>
                </PriceBox>
                <ReactSlider className={'slider'}
                        value={values}
                        min={MIN}
                        max={MAX}
                        onChange={handleSliderChange}
                />
            </RangeBox>
        </>
    );
};

export default RangeFilter;


const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 20px;
`
const RangeBox = styled.div`
  width: 324px;
  margin-top: 15px;
`

const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
`
const Price = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid #EAEAEA;
  width: 148px;
  height: 50px;
  color: #868686;
  border-radius: 7px;
  text-align: center;
  display: flex;
  align-items: center;
  padding-left: 20px;
`