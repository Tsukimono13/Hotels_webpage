import React, {useEffect, useState} from 'react';
import {Container} from "components/container/Container";
import deleteBtn from "assets/icons/delete.svg"
import axios from "axios";
import {CountryFilter} from "features/countryFilter/CountryFilter";
import {RatingFilter} from "features/ratingFilter/RatingFilter";
import {RangePriceFilter} from "features/rangePriceFilter/RangePriceFilter";
import {ReviewNumberFilter} from "features/reviewNumberFilter/ReviewNumberFilter";
import {NotFound} from "components";
import {AdvertisementsBlock} from "components";
import {HotelType} from "pages/main/MainPage_Types";
import {S} from "pages/main/MainPage_Styles"
import {TypeFilter} from "features/typeFilter/TypeFilter";
import ReactPaginate from 'react-paginate';
import styled from "styled-components";

const countItems = 3;
const MainPage = () => {
    const [hotels, setHotels] = useState<HotelType[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [filteredHotels, setFilteredHotels] = useState<HotelType[]>([]);
    const [selectedStars, setSelectedStars] = useState<number[]>([]);
    const [selectedNumReview, setSelectedNumReview] = useState<number | null>(null);
    const [reviewInputValue, setReviewInputValue] = useState('')
    const [selectedRangePrice, setSelectedRangePrice] = useState<[number, number]>([0, 100500]);

    const [currentPage, setCurrentPage] = useState<number>(0);

    const paginatedHotels = filteredHotels.slice(
        currentPage * countItems,
        currentPage * countItems + countItems
    );
    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

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
                            paginatedHotels.map((hotel: HotelType) => (
                                    <AdvertisementsBlock key={hotel.name} hotel={hotel}/>
                                )
                            ))}
                        <PaginationContainer>
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={Math.ceil(filteredHotels.length / countItems)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageChange}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </PaginationContainer>
                    </S.Advertisements>
                </S.Wrapper>
            </Container>
        </S.Main>
    );
};

export default MainPage;


const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const ActivePage = styled.span`
  color: red;
  font-weight: bold;
`;
