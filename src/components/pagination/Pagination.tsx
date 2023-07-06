import React from 'react';
import ReactPaginate from "react-paginate";
import {HotelType} from "pages/main/MainPage_Types";
import "./Pagination.css"

type PropsType = {
    filteredHotels: HotelType[]
    setCurrentPage: (page: number) => void
    countItems: number
}

const Pagination: React.FC<PropsType> = ({setCurrentPage, filteredHotels, countItems}) => {
    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };
    return (
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
    );
};

export default Pagination;
