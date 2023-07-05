import React from 'react';
import StarRatingComponent from "react-star-rating-component";

type PropsType = {
    stars: number
}
export const StarsRating: React.FC<PropsType> = ({stars}) => {

    return (
        <>
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={stars}
                starColor={'#FFA900'}
                emptyStarColor={'#D7D7D7'}
            />
        </>
    );
};
