import React, {useState} from 'react';
import {formatPrice} from "utils";
import tick from "assets/icons/check.svg";
import book from "assets/icons/book.svg";
import {S} from "./BookingBlock_Styles"
import {BookingBtn} from "components/bookingBtn/BookingBtn";

type HotelStateType = {
    [key: string]: boolean;
}

type PropsType = {
    name: string
    min_price: number
}

export const BookingBlock: React.FC<PropsType> = ({name, min_price}) => {
    const [hotelStates, setHotelStates] = useState<HotelStateType>({});

    const handleIsBook = (hotelName: string) => {
        setHotelStates((prevState) => ({
            ...prevState,
            [hotelName]: !prevState[hotelName],
        }));
    };

    return (
        <S.BookingContainer>
            <S.Price>{formatPrice(min_price)} ₽</S.Price>
            <S.PerNight>Цена за 1 ночь</S.PerNight>
            {hotelStates[name] ? (
                <BookingBtn
                    color={'#00BB6D'}
                    bgColor={'rgba(0, 187, 109, 0.1)'}
                    onClick={() => handleIsBook(name)}>
                    <img src={tick} alt="is booked"/>
                    Забронировано
                </BookingBtn>
            ) : (
                <BookingBtn
                    onClick={() => handleIsBook(name)}>
                    <img src={book} alt="booking"/>
                    Забронировать
                </BookingBtn>
            )}
        </S.BookingContainer>
    );
};
