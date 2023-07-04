import React from 'react';
import {S} from "components/notFound/NotFound_Styles"
import notFound from "assets/notFound.png"

type PropsType = {
    handleResetFilters: ()=>void
}
const NotFound: React.FC<PropsType> = ({handleResetFilters}) => {
    return (
        <S.MainContainer>
            <S.ContentContainer>
                <img src={notFound} alt={'Man is trying to find something'}/>
                <S.NotFoundTitle>По данным параметрам ничего не найдено</S.NotFoundTitle>
                <S.Description>Попробуйте изменить параметры фильтрации
                    или вернуться в общий каталог</S.Description>
                <S.ClearBtn onClick={handleResetFilters}>Очистить фильтр</S.ClearBtn>
            </S.ContentContainer>
        </S.MainContainer>
    );
};

export default NotFound;

