import React from 'react';
import {S} from "components/advertisements/AdvertisementsBlock_Styles"
import {HotelType} from "pages/main/MainPage_Types";
import {DescriptionBlock} from "components/advertisements";
import {BookingBlock} from "components/advertisements";

type PropsType = {
    hotel: HotelType
}

export const AdvertisementsBlock: React.FC<PropsType> = ({hotel}) => {
    const {name, type, country, reviews_amount, description, min_price, stars} = hotel

    return (
        <S.AdvertisementContainer>
            <DescriptionBlock
                name={name}
                stars={stars}
                type={type}
                country={country}
                reviews_amount={reviews_amount}
                description={description}
            />
            <BookingBlock min_price={min_price} name={name}/>
        </S.AdvertisementContainer>
    );
};






