import React, {useState} from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import search from "assets/icons/search.svg";
import {FilterContainer} from "components";
import {S} from "features/Filters_Styles"
import cross from "assets/icons/cross.svg"
import {CountryCheckbox} from "features/countryFilter";

type PropsType = {
    selectedCountries: string[]
    setSelectedCountries: (countries: string[]) => void
}
const country = ["Африка", "Болгария", "Греция", "Грузия", "Италия", "Россия", "Турция", "Япония"]

export const CountryFilter: React.FC<PropsType> = ({selectedCountries, setSelectedCountries}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value.trim());
    };

    const handlerClearInput = () => {
        setSearchValue('');
    };

    const filteredCountries = country.filter((c) =>
        c.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            <S.FilterTitle>Страна</S.FilterTitle>
            <CustomInput placeholder={'Поиск стран'}
                         paddingL={'40px'}
                         marginB={'0px'}
                         value={searchValue}
                         onChange={handleInputChange}/>
            <S.SearchImg src={search}/>
            {searchValue && (
                <S.ClearButton onClick={handlerClearInput}><img src={cross} alt={'Clear input button'}/></S.ClearButton>
            )}
            <FilterContainer margin={'10px 0px 25px'}>
                <S.CheckboxContainer>
                    {filteredCountries.length === 0 ? (
                        <S.ErrorText>К сожалению, по вашему запросу ничего не найдено :(</S.ErrorText>
                    ) : (
                        <ul>
                            {filteredCountries.map((country, i) => (
                                <CountryCheckbox
                                    key={i}
                                    country={country}
                                    selectedCountries={selectedCountries}
                                    setSelectedCountries={setSelectedCountries}/>
                            ))}
                        </ul>
                    )}
                </S.CheckboxContainer>
            </FilterContainer>
        </>
    );
};




