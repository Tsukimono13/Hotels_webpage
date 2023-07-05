import React from 'react';
import {FilterContainer} from "components/filterContainer/FilterContainer";
import {S} from "features/Filters_Styles"

type PropsType = {
    selectedStars: number[]
    setSelectedStars: Function
}

type StarsType = {
    num: number
    title: string
}

const stars: StarsType[] = [
    {num: 1, title: "звезда"},
    {num: 2, title: "звезды"},
    {num: 3, title: "звезды"},
    {num: 4, title: "звезды"},
    {num: 5, title: "звезд"}
]

export const RatingFilter: React.FC<PropsType> = ({selectedStars, setSelectedStars}) => {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const starNumber = parseInt(event.target.value);
        if (event.target.checked) {
            setSelectedStars((prevSelectedStars: number[]) => [...prevSelectedStars, starNumber]);
        } else {
            setSelectedStars((prevSelectedStars: number[]) =>
                prevSelectedStars.filter((star: number) => star !== starNumber)
            );
        }
    };

    return (
        <>
            <S.FilterTitle>Колличество звёзд</S.FilterTitle>
            <FilterContainer>
                <S.CheckboxContainer>
                    <ul>
                        {stars.map((el: StarsType, index) => (
                            <S.CustomCheckbox key={index}>
                                <li>
                                    <input type="checkbox"
                                           value={el.num}
                                           checked={selectedStars.includes(el.num)}
                                           onChange={handleCheckboxChange}/>
                                    <label>
                                        <span>{el.num} {el.title}</span>
                                    </label>
                                </li>
                            </S.CustomCheckbox>
                        ))}
                    </ul>
                </S.CheckboxContainer>
            </FilterContainer>
        </>
    );
};


