import React, {useState} from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import styled from "styled-components";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"

const RangeFilter = () => {

    const [values, setValues] = useState<[number, number]>([0, 100]);


    return (
        <>
            <FilterTitle>Цена</FilterTitle>
            <RangeBox>
                <PriceBox>
                    <CustomInput placeholder={'от 0 ₽'} width={'150px'}/>
                    <span> - </span>
                    <CustomInput placeholder={'до 100 500 ₽'} width={'150px'}/>
                </PriceBox>
                <div>


                </div>
            </RangeBox>
        </>
    );
};

export default RangeFilter;


const PriceBox = styled.div`
  display: flex;
`
const RangeBox = styled.div`
  width: 324px;
`
const Slider = styled.input`
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
  width: 300px;
`
const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
`