import React from 'react';
import {FilterContainer} from "components/filterContainer/FilterContainer";
import styled from "styled-components";
import check from "assets/icons/whiteCheck.svg";

type PropsType = {
    selectedTypes: string[]
    setSelectedTypes: any
}


const CheckboxType: React.FC<PropsType> = ({selectedTypes, setSelectedTypes}) => {

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const type = event.target.value;
        if (event.target.checked) {
            setSelectedTypes([...selectedTypes, type]);
        } else {
            setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
        }
    };

    return (
        <>
            <FilterTitle>Тип</FilterTitle>
            <FilterContainer height={'120px'}>
                <CheckboxContainer>
                    <ul>
                        <CustomCheckbox>
                            <li>
                                <input
                                    type="checkbox"
                                    value="Апартаменты"
                                    checked={selectedTypes.includes("Апартаменты")}
                                    onChange={handleTypeChange}
                                />
                                <label>Апартаменты</label>
                            </li>
                        </CustomCheckbox>
                        <StyledHr/>
                        <CustomCheckbox>
                            <li>
                                <input
                                    type="checkbox"
                                    value="Отель"
                                    checked={selectedTypes.includes("Отель")}
                                    onChange={handleTypeChange}
                                />
                                <label>Отель</label>
                            </li>
                        </CustomCheckbox>
                    </ul>
                </CheckboxContainer>
            </FilterContainer>
        </>
    );
};

export default CheckboxType;


const FilterTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  width: 324px;
`
const CheckboxContainer = styled.div`
  margin: 24px 0 0 20px;
`
const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #EAEAEA;
  width: 284px;
  margin-bottom: 15px;
`;
const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 18px;
  height: 18px;

  input {
    opacity: 0;
    position: absolute;
    display: flex;
    cursor: pointer;
  }

  input:checked {
    & + label::before {
      content: url(${check});
      display: flex;
      justify-content: center;
      align-items: center;
      background: #00BB6D;
    }
  }


  label {
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    display: flex;

    &:hover {
      &::before {
        background: #00BB6D;
      }
    }
  }

  label::before {
    content: "";
    border: 1px solid #CDCDCD;
    width: 18px;
    height: 18px;
    border-radius: 15%;
    margin-right: 11px;
  }

  input:hover + label::before {
    background: #00BB6D;
  }
`;