import React, {useState} from 'react';
import styled from "styled-components";
import ReactSlider from 'react-slider'
import "./RangeFilter.css"
import {formatPrice} from "utils/formatPrice";

type PropsType = {
    selectedRangePrice: number[]
    setSelectedRangePrice: any
}
const RangeFilter: React.FC<PropsType> = ({selectedRangePrice, setSelectedRangePrice}) => {

    const handleSliderChange = (newValues: number | number[]) => {
        if (Array.isArray(newValues)) {
            setSelectedRangePrice(newValues as [number, number]);
        }
    };

    return (
        <>
            <FilterTitle>Цена</FilterTitle>
            <RangeBox>
                <PriceBox>
                    <Price>от {formatPrice(selectedRangePrice[0])} ₽</Price><span>-</span><Price>до {formatPrice(selectedRangePrice[1])} ₽</Price>
                </PriceBox>
                <ReactSlider className={'slider'}
                             value={selectedRangePrice}
                             min={0}
                             max={100500}
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
