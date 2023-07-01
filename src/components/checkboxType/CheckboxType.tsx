import React, {useState} from 'react';
import {FilterContainer} from "components/filterContainer/FilterContainer";
import styled from "styled-components";

const CheckboxType = () => {
    const [checkedType, setCheckedType] = useState(false)


    const changeTypeHandler = (event: any) => {
        const isChecked = event.target.checked;
        setCheckedType(isChecked)
    }

    return (
        <>
            <FilterTitle>Тип</FilterTitle>
            <FilterContainer height={'120px'}>
                <ul>
                    <li>
                        <label>
                            <Checkbox type="checkbox" value="Апартаменты" onChange={changeTypeHandler}/>
                            Апартаменты
                        </label>
                    </li>
                    <hr/>
                    <li>
                        <label>
                            <Checkbox type="checkbox" value="Отель" onChange={changeTypeHandler}/>
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