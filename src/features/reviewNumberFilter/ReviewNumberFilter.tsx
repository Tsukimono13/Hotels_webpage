import React from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import {S} from "features/Filters_Styles"

type PropsType = {
    setSelectedNumReview: (value: number | null) => void;
    setReviewInputValue: (value: string) => void;
    reviewInputValue: string
}
export const ReviewNumberFilter: React.FC<PropsType> = ({setSelectedNumReview, setReviewInputValue, reviewInputValue}) => {

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedNumReview(Number(value) >= 0 ? Number(value) : null);
        setReviewInputValue(value)
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

