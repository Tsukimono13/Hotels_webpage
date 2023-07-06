import React from 'react';
import {S} from "features/Filters_Styles"
import ReactSelect from 'react-select';
import {customStyles} from "styles/customStylesForSelect";
import {OptionsType} from "pages/main/MainPage_Types";


type PropsType = {
    setSelectedCountry: (countries: string | null) => void
    inputValue: OptionsType | null
    setInputValue: (value: OptionsType | null) => void
}

const country: OptionsType[] = [
    {value: 'африка', label: 'Африка'},
    {value: 'болгария', label: 'Болгария'},
    {value: 'греция', label: 'Греция'},
    {value: 'дания', label: 'Дания'},
    {value: 'италия', label: 'Италия'},
    {value: 'мексика', label: 'Мексика'},
    {value: 'китай', label: 'Китай'},
    {value: 'япония', label: 'Япония'},
]

export const CountryFilter: React.FC<PropsType> = ({setSelectedCountry, inputValue, setInputValue}) => {

    const handleSearchCountry = (selectedOption: OptionsType | null) => {
        setSelectedCountry(selectedOption?.value || null);
        setInputValue(selectedOption);
    };

    return (
        <>
            <S.FilterTitle>Страна</S.FilterTitle>
            <ReactSelect
                options={country}
                placeholder="Выберите страну..."
                styles={customStyles}
                isSearchable={true}
                value={inputValue}
                onChange={handleSearchCountry}
            />
        </>
    );
};




