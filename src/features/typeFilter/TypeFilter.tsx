import React from 'react';
import {S} from "features/Filters_Styles"
import {FilterContainer} from "components";
import {CheckboxType} from "features/typeFilter/typeCheckbox/TypeCheckbox";

type PropsType = {
    selectedTypes: string[]
    setSelectedTypes: (selectedTypes: string[]) => void
}

export const TypeFilter: React.FC<PropsType> = ({selectedTypes, setSelectedTypes}) => {
    return (
        <>
            <S.FilterTitle>Тип</S.FilterTitle>
            <FilterContainer height={'120px'}>
                <S.CheckboxContainer>
                    <ul>
                        <CheckboxType value={"Апартаменты"} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}/>
                        <S.StyledHr/>
                        <CheckboxType value={"Отель"} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}/>
                    </ul>
                </S.CheckboxContainer>
            </FilterContainer>
        </>
    );
};
