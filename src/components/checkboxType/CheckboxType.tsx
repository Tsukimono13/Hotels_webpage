import React, {useState} from 'react';
import {FilterContainer} from "components/filterContainer/FilterContainer";
import styled from "styled-components";

type PropsType = {
    filterTypes: string[]
    setFilterTypes: React.Dispatch<React.SetStateAction<string[]>>;
}
const CheckboxType:React.FC<PropsType> = ({filterTypes, setFilterTypes}) => {



    const handleCheckboxChange = (type: string) => {
        setFilterTypes((prevFilterTypes) => {
            if (prevFilterTypes.includes(type)) {
                return prevFilterTypes.filter((item) => item !== type);
            } else {
                return [...prevFilterTypes, type];
            }
        });
    };

    return (
        <>
            <FilterTitle>Тип</FilterTitle>
            <FilterContainer height={'120px'}>
                <ul>
                    <li>
                        <label>
                            <Checkbox type="checkbox" checked={filterTypes.includes('Апартаменты')}
                                      onChange={() => handleCheckboxChange("Апартаменты")}/>
                            Апартаменты
                        </label>
                    </li>
                    <hr/>
                    <li>
                        <label>
                            <Checkbox type="checkbox"  checked={filterTypes.includes('Отель')}
                                      onChange={() => handleCheckboxChange("Отель")}/>
                            Отель
                        </label>
                    </li>
                </ul>
            </FilterContainer>
        </>
    );
};

export default CheckboxType;

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