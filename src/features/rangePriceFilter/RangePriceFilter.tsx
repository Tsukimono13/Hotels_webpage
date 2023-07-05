import React from 'react';
import {S} from "features/rangePriceFilter/RangePriceFilter_Styles"
import ReactSlider from 'react-slider'
import "./RangePriceFilter.css"
import {formatPrice} from "utils/formatPrice";

type PropsType = {
    selectedRangePrice: number[]
    setSelectedRangePrice: (value: [number, number]) => void
}
export const RangePriceFilter: React.FC<PropsType> = ({selectedRangePrice, setSelectedRangePrice}) => {

    const handleSliderChange = (newValues: number | number[]) => {
        if (Array.isArray(newValues)) {
            setSelectedRangePrice(newValues as [number, number]);
        }
    };

    return (
        <>
            <S.FilterTitle>Цена</S.FilterTitle>
            <S.RangeBox>
                <S.PriceBox>
                    <S.Price>от {formatPrice(selectedRangePrice[0])} ₽</S.Price>
                    <span>-</span>
                    <S.Price>до {formatPrice(selectedRangePrice[1])} ₽</S.Price>
                </S.PriceBox>
                <ReactSlider className={'slider'}
                             value={selectedRangePrice}
                             min={0}
                             max={100500}
                             onChange={handleSliderChange}
                />
            </S.RangeBox>
        </>
    );
};




