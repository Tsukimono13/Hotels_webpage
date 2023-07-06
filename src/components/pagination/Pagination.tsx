import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import {HotelType} from "pages/main/MainPage_Types";
import "./Pagination.css"
import {AdvertisementsBlock} from "components/advertisements/AdvertisementsBlock";

type PropsType = {
    filteredHotels: HotelType[]
}

export const Pagination: React.FC<PropsType> = ({filteredHotels}) => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const countItems = 3;

    const paginatedHotels = filteredHotels.slice(
        currentPage * countItems,
        currentPage * countItems + countItems
    );
    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };
    return (
        <>
            {paginatedHotels.map((hotel: HotelType) => (
                <AdvertisementsBlock key={hotel.name} hotel={hotel}/>
            ))}
            {filteredHotels.length > countItems && (
                <ReactPaginate
                    previousLabel={<span style={{marginRight: '50px'}}>&#10094; Назад</span>}
                    nextLabel={<span style={{marginLeft: '50px'}}>Следующая &#10095;</span>}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(filteredHotels.length / countItems)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName={'page'}
                    disabledClassName={'disable'}
                />

            )}
        </>
    );
};

