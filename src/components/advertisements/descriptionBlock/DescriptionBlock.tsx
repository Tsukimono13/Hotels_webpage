import React from 'react';
import {StarsRating} from "components";
import {getReviewNumbers} from "utils";
import location from "assets/icons/location.svg";
import {S} from "components/advertisements/descriptionBlock/DescriptionBlock_Styles"

type PropsType = {
    name: string
    type: string
    stars: number
    description: string
    reviews_amount: number
    country: string
}

export const DescriptionBlock: React.FC<PropsType> = ({description, type, reviews_amount, country, stars, name}) => {
    return (
        <S.InfoBlock>
            <S.HotelTitle>{name}</S.HotelTitle>
            <S.DescriptionBox>
                <StarsRating stars={stars}/>
                <S.TypeText>{type}</S.TypeText>
                <S.Dot></S.Dot>
                <S.Review>{getReviewNumbers(reviews_amount)}</S.Review>
                <S.Location><img src={location} alt='Location icon'/>{country}</S.Location>
            </S.DescriptionBox>
            <S.HotelDescription>{description}</S.HotelDescription>
        </S.InfoBlock>
    );
};


