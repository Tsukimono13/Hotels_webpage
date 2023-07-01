import React, {FC, useState} from 'react';
import StarRatingComponent from "react-star-rating-component";
import {HotelType} from "sections/MainPage";

type PropsType = {
    hotel: HotelType
}
const StarsRating:React.FC<PropsType> = ({hotel}) => {

    return (
        <>
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={hotel.stars}
                starColor={'#FFA900'}
                emptyStarColor={'#D7D7D7'}
            />
        </>
    );
};

export default StarsRating;