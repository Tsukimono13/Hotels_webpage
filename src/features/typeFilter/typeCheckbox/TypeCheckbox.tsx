import React from 'react';
import {S} from "features/Filters_Styles";

type PropsType = {
    value: string
    selectedTypes: string[]
    setSelectedTypes: (selectedTypes: string[]) => void
}
export const CheckboxType: React.FC<PropsType> = ({value, selectedTypes, setSelectedTypes}) => {

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const type = event.target.value;
        if (event.target.checked) {
            setSelectedTypes([...selectedTypes, type]);
        } else {
            setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
        }
    };

    return (
        <S.CustomCheckbox>
            <li>
                <input
                    type="checkbox"
                    value={value}
                    checked={selectedTypes.includes(value)}
                    onChange={handleTypeChange}
                />
                <label>{value}</label>
            </li>
        </S.CustomCheckbox>
    );
};
