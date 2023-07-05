import React from 'react';
import {S} from "features/Filters_Styles";

type PropsType = {
    selectedCountries: string[]
    setSelectedCountries: (countries: string[]) => void
    country: string
}

export const CountryCheckbox: React.FC<PropsType> = ({selectedCountries, setSelectedCountries, country}) => {

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {checked, value} = event.target;
        if (checked) {
            setSelectedCountries([...selectedCountries, value]);
        } else {
            setSelectedCountries(selectedCountries.filter((c: string) => c !== value));
        }
    };

    return (
        <S.CustomCheckbox>
            <li>
                <input
                    type="checkbox"
                    value={country}
                    checked={selectedCountries.includes(country)}
                    onChange={handleCountryChange}
                />
                <label>{country}</label>
            </li>
        </S.CustomCheckbox>
    );
};
