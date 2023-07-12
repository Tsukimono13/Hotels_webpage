import React from 'react';
import {CheckboxType} from "features/typeFilter";
import {S} from "features/Filters_Styles"
import {FilterContainer} from "components";

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
