import React from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import search from "assets/search.svg";
import {FilterContainer} from "components/filterContainer/FilterContainer";
import styled from "styled-components";
import {HotelType} from "sections/MainPage";




type PropsType = {
    searchCountry: string
    setSearchCountry: React.Dispatch<React.SetStateAction<string[]>>;
}

const country = ["Африка", "Греция", "Тропики"]

const SearchInput: React.FC<PropsType> = ({searchCountry, setSearchCountry}) => {
    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(setSearchCountry(event.target.value))
    };

    const filteredCountries = searchCountry
        ? country.filter((c) =>
            c.toLowerCase().includes(searchCountry.toLowerCase())
        )
        : country;
    return (
        <>
            <FilterTitle>Страна</FilterTitle>
            <CustomInput placeholder={'Поиск стран'} paddingL={'33px'} marginB={'0px'} onChange={searchChangeHandler}/>
            <SearchImg src={search}/>
            <FilterContainer margin={'10px 0px 25px'}>
                <ul>
                    {filteredCountries.map((c, i)=><li key={i}>
                            <label>
                                <Checkbox type="checkbox"/>
                                {c}
                            </label>
                        </li>)}
                </ul>
            </FilterContainer>
        </>
    );
};

export default SearchInput;

const SearchImg = styled.img`
  position: absolute;
  z-index: 9999;
  top: 50px;
  left: 15px;
`

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`
const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  border: 1px solid #CDCDCD;
  margin: 0 10px 15px 20px;
`
const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
`