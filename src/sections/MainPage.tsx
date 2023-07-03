import React, {useEffect, useState} from 'react';
import {Container} from "components/container/Container";
import styled from "styled-components";
import deleteBtn from "assets/delete.svg"
import location from "assets/location.svg"
import book from "assets/book.svg"
import tick from "assets/check.svg"
import axios from "axios";
import SearchInput from "components/searchInput/SearchInput";
import CheckboxType from "components/checkboxType/CheckboxType";
import RatingCheckbox from "components/ratingCheckbox/RatingCheckbox";
import RangeFilter from "components/rangeFilter/RangeFilter";
import ReviewNumberFilter from "components/reviewNumberFilter/ReviewNumberFilter";
import StarsRating from "components/starsRating/StarsRating";


export type HotelType = {
    name: string;
    country: string;
    address: string;
    stars: number;
    type: string;
    description: string;
    services: string[];
    min_price: number;
    currency: string;
    rating: number;
    reviews_amount: number;
    last_review: string;
}
type HotelStateType = {
    [key: string]: boolean;
}

const MainPage = () => {
    const [hotels, setHotels] = useState<HotelType[]>([]);

    const [hotelStates, setHotelStates] = useState<HotelStateType>({});


    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

    const [filterTypes, setFilterTypes] = useState<string[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<HotelType[]>(hotels);

    const [reviewNumber, setReviewNumber] = useState<number>(0)

    console.log(filteredHotels)
    console.log(hotels)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./hotels.json');
                if (response.status === 200) {
                    const hotelsData: HotelType[] = response.data.hotels;
                    setHotels(hotelsData);
                    setFilteredHotels(hotelsData)
                } else {
                    console.log('Ошибка при получении данных');
                }
            } catch (error) {
                console.log('Произошла ошибка', error);
            }
        };

        fetchData();
    }, []);


    const onClickIsBook = (hotelName: string) => {
        setHotelStates((prevState) => ({
            ...prevState,
            [hotelName]: !prevState[hotelName],
        }));
    };
    const getReviewNumbers = (reviewsAmount: number) => {
        let reviewWord;
        if (reviewsAmount % 10 === 1 && reviewsAmount % 100 !== 11) {
            reviewWord = " отзыв";
        } else if (2 <= reviewsAmount % 10 && reviewsAmount % 10 <= 4
            && (reviewsAmount % 100 < 10 || reviewsAmount % 100 >= 20)) {
            reviewWord = " отзыва";
        } else {
            reviewWord = " отзывов";
        }
        return reviewsAmount + reviewWord;
    }


    const handleApplyFilter = () => {
        if (selectedCountries.length > 0) {
            const filtered = hotels.filter((hotel: HotelType) =>
                selectedCountries.includes(hotel.country)
            );
            setFilteredHotels(filtered);
        } else {
            setFilteredHotels(hotels);
        }
    };


    return (
        <MainDiv>
            <Container>
                <Wrapper>
                    <div>
                        <SearchInput selectedCountries={selectedCountries} setSelectedCountries={setSelectedCountries}/>
                        <div>
                            <CheckboxType filterTypes={filterTypes} setFilterTypes={setFilterTypes}/>
                        </div>
                        <RatingCheckbox/>
                        <ReviewNumberFilter setReviewNumber={setReviewNumber}/>
                        <RangeFilter/>
                        <ConfirmBtn onClick={handleApplyFilter}>Применить фильтр</ConfirmBtn>
                        <CanselBtn><img src={deleteBtn}/>Очистить фильтр</CanselBtn>
                    </div>

                    <Suggestions>
                        {filteredHotels.map((hotel: HotelType) => (<SuggestionContainer key={hotel.name}>
                                    <InfoBox>
                                        <HotelTitle>{hotel.name}</HotelTitle>
                                        <DescriptionBox>
                                            <StarsRating hotel={hotel}/>
                                            <TypeText>{hotel.type}</TypeText>
                                            <Dot></Dot>
                                            <Review>{getReviewNumbers(hotel.reviews_amount)}</Review>
                                            <Location><img src={location}/>{hotel.country}</Location>
                                        </DescriptionBox>
                                        <HotelDescription>{hotel.description}</HotelDescription>
                                    </InfoBox>
                                    <BookingBox>
                                        <Price>{Math.round(hotel.min_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₽</Price>
                                        <PerNight>Цена за 1 ночь</PerNight>
                                        {hotelStates[hotel.name] ? (
                                            <BookedButton onClick={() => onClickIsBook(hotel.name)}>
                                                <img src={tick} alt="booked"/>Забронировано
                                            </BookedButton>
                                        ) : (
                                            <BookButton onClick={() => onClickIsBook(hotel.name)}>
                                                <img src={book} alt="book"/>Забронировать
                                            </BookButton>
                                        )}
                                    </BookingBox>
                                </SuggestionContainer>
                            ))}
                    </Suggestions>
                </Wrapper>
            </Container>
        </MainDiv>
    );
};

export default MainPage;

const MainDiv = styled.div`
  min-height: 100vh;
  background: #ffffff;
`
const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  height: 100%;
  margin: 91px 0 35px;
  position: relative;
`

const ConfirmBtn = styled.button`
  width: 324px;
  height: 56px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  color: #FFFFFF;
  background: #6A53F5;
  margin: 40px 0 15px;
  cursor: pointer;
`
const CanselBtn = styled.button`
  width: 324px;
  height: 56px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  border: 1px solid #EAEAEA;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
const Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`
const SuggestionContainer = styled.div`
  border-radius: 7px;
  border: 1px solid #EAEAEA;
  min-height: 167px;
  width: 835px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`

const InfoBox = styled.div`
  width: 560px;
  margin: 25px 0 28px 25px;
`
const HotelTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 6px;
`
const TypeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #868686;
  position: relative;
  margin: 0 6px 0 15px;
`
const Dot = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #868686;
`
const DescriptionBox = styled.div`
  display: flex;
  //gap: 15px;
  margin-bottom: 15px;
  justify-content: flex-start;
  align-items: center;
`
const Review = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #868686;
  margin: 0 15px 0 8px;
`
const Location = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
const HotelDescription = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  min-width: 560px;
`
const Price = styled.h3`
  font-size: 25px;
  font-weight: 700;
  line-height: 32px;
`
const PerNight = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`
const BookButton = styled.button`
  background: rgba(106, 83, 245, 0.1);
  width: 179px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #6A53F5;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 7px;
  cursor: pointer;
`

const BookedButton = styled.button`
  background: rgba(0, 187, 109, 0.1);;
  width: 179px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #00BB6D;;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 7px;
  cursor: pointer;
`

const BookingBox = styled.div`
  margin: 22px 25px 30px 0px;
`