import React from 'react';
import {S} from "features/Filters_Styles"
import {customStyles} from "styles/customStylesForSelect";
import ReactSelect from "react-select";
import {OptionsType} from "pages/main/MainPage_Types";

type PropsType = {
    setSelectedType: (selectedType: string[]) => void
    valueType: OptionsType | null
    setValueType: (value: OptionsType | null) => void
}

const types: OptionsType[] = [
    {value: 'апартаменты', label: 'Апартаменты'},
    {value: 'отель', label: 'Отель'},
]
export const TypeFilter: React.FC<PropsType> = ({setSelectedType, valueType, setValueType}) => {

    const handleSelectType = (selectedOptions: any) => {
        const value = selectedOptions?.map((option: OptionsType) => option.value) || []
        setSelectedType(value);
        setValueType(selectedOptions)
    };

    return (
        <>
            <S.FilterTitle>Тип</S.FilterTitle>
            <ReactSelect
                options={types}
                placeholder="Выберите тип..."
                styles={customStyles}
                onChange={handleSelectType}
                isMulti={true}
                value={valueType}
            />
        </>
    );
};
