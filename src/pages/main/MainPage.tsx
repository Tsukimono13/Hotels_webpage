import React, {useEffect, useState} from 'react';
import {Container} from "components";
import deleteBtn from "assets/icons/delete.svg"
import axios from "axios";
import {CountryFilter} from "features";
import {RatingFilter} from "features/";
import {RangePriceFilter} from "features";
import {ReviewNumberFilter} from "features";
import {NotFound} from "components";
import {HotelType} from "pages/main/MainPage_Types";
import {S} from "pages/main/MainPage_Styles"
import {TypeFilter} from "features";
import {Pagination} from "components";

export const MainPage = () => {
    const [hotels, setHotels] = useState<HotelType[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<HotelType[]>([]);
    const [selectedStars, setSelectedStars] = useState<number[]>([]);
    const [selectedNumReview, setSelectedNumReview] = useState<number | null>(null);
    const [reviewInputValue, setReviewInputValue] = useState('')
    const [selectedRangePrice, setSelectedRangePrice] = useState<[number, number]>([0, 100500]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('./hotels.json');
                if (response.status === 200 && response.data && response.data.hotels) {
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

    const handleApplyFilters = () => {
        const filtered = hotels.filter((hotel) =>
            (selectedCountries.length === 0 || selectedCountries.includes(hotel.country)) &&
            (selectedTypes.length === 0 || selectedTypes.includes(hotel.type)) &&
            (selectedStars.length === 0 || selectedStars.includes(hotel.stars)) &&
            (selectedNumReview ? hotel.reviews_amount >= selectedNumReview : true) &&
            (selectedRangePrice ? hotel.min_price >= selectedRangePrice[0] && hotel.min_price <= selectedRangePrice[1] : true)
        );
        setFilteredHotels(filtered);
    };

    const handleResetFilters = () => {
        setSelectedCountries([]);
        setSelectedTypes([]);
        setSelectedStars([]);
        setSelectedNumReview(null);
        setReviewInputValue('');
        setSelectedRangePrice([0, 100500]);
        setFilteredHotels(hotels);
    }

    return (
        <S.Main>
            <Container>
                <S.Wrapper>
                    <div>
                        <CountryFilter
                            selectedCountries={selectedCountries}
                            setSelectedCountries={setSelectedCountries}
                        />
                        <TypeFilter
                            selectedTypes={selectedTypes}
                            setSelectedTypes={setSelectedTypes}
                        />
                        <RatingFilter
                            selectedStars={selectedStars}
                            setSelectedStars={setSelectedStars}
                        />
                        <ReviewNumberFilter
                            setSelectedNumReview={setSelectedNumReview}
                            setReviewInputValue={setReviewInputValue}
                            reviewInputValue={reviewInputValue}
                        />
                        <RangePriceFilter
                            selectedRangePrice={selectedRangePrice}
                            setSelectedRangePrice={setSelectedRangePrice}
                        />
                        <S.ConfirmBtn onClick={handleApplyFilters}>
                            Применить фильтр
                        </S.ConfirmBtn>
                        <S.CanselBtn onClick={handleResetFilters}>
                            <img src={deleteBtn} alt={'Delete icon'}/>
                            Очистить фильтр
                        </S.CanselBtn>
                    </div>
                    <S.Advertisements>
                        {filteredHotels.length === 0 ? (
                            <NotFound handleResetFilters={handleResetFilters}/>
                        ) : (
                            <Pagination filteredHotels={filteredHotels}/>
                        )}
                    </S.Advertisements>
                </S.Wrapper>
            </Container>
        </S.Main>
    );
};






