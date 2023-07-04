import React, {useState} from 'react';
import {CustomInput} from "components/customInput/CustomInput";
import search from "assets/icons/search.svg";
import {FilterContainer} from "components/filterContainer/FilterContainer";
import styled from "styled-components";
import cross from "assets/icons/cross.svg"
import check from "assets/icons/whiteCheck.svg"


type PropsType = {
    selectedCountries: string[]
    setSelectedCountries: any
}

const country = ["Африка", "Болгария", "Греция", "Грузия", "Италия", "Россия", "Турция", "Япония"]

const SearchInput: React.FC<PropsType> = ({selectedCountries, setSelectedCountries}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event: any) => {
        setSearchValue(event.target.value.trim());
    };

    const filteredCountries = country.filter((c) =>
        c.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleCountryCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const country = event.target.value;
        if (event.target.checked) {
            setSelectedCountries([...selectedCountries, country]);
        } else {
            setSelectedCountries(selectedCountries.filter((c: string) => c !== country));
        }
    };

    const clearInput = () => {
        setSearchValue('');
    };

    return (
        <>
            <FilterTitle>Страна</FilterTitle>
            <CustomInput placeholder={'Поиск стран'}
                         paddingL={'40px'}
                         marginB={'0px'}
                         value={searchValue}
                         onChange={handleInputChange}/>
            <SearchImg src={search}/>
            {searchValue && (
                <ClearButton onClick={clearInput}><img src={cross}/></ClearButton>
            )}
            <FilterContainer margin={'10px 0px 25px'}>
                <CheckboxContainer>
                    {filteredCountries.length === 0 ? (
                        <ErrorText>К сожалению, по вашему запросу ничего не найдено :(</ErrorText>
                    ) : (
                        <ul>
                            {filteredCountries.map((c, i) => (
                                <CustomCheckbox key={i}>
                                    <li>
                                        <input
                                            type="checkbox"
                                            value={c}
                                            checked={selectedCountries.includes(c)}
                                            onChange={handleCountryCheckboxChange}
                                        />
                                        <label>{c}</label>
                                    </li>
                                </CustomCheckbox>
                            ))}
                        </ul>
                    )}
                </CheckboxContainer>
            </FilterContainer>
        </>
    );
};

export default SearchInput;

const SearchImg = styled.img`
  position: absolute;
  z-index: 9999;
  top: 50px;
  left: 15px;
`

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
const ErrorText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #868686;
  text-align: center;
  width: 228px;
  margin: 77px 25px;
`
const ClearButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 54px;
  left: 25%;
`
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
