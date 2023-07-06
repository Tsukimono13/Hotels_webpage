import React from 'react';
import {CustomInput} from "components";
import {S} from "features/Filters_Styles"

type PropsType = {
    setSelectedNumReview: (value: number | null) => void;
    setReviewInputValue: (value: string) => void;
    reviewInputValue: string
}
export const ReviewNumberFilter: React.FC<PropsType> = ({setSelectedNumReview, setReviewInputValue, reviewInputValue}) => {

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const roundedValue = Math.round(Number(value));
        setSelectedNumReview(Number(value) >= 0 ? roundedValue : null);
        setReviewInputValue(value);
    };

    return (
        <>
            <S.FilterTitle>Количество отзывов (от)</S.FilterTitle>
            <CustomInput placeholder={'Например, от 10'} type="text"
                         min="0"
                         onChange={handleFilterChange}
                         value={reviewInputValue}
            />
        </>
    );
};

