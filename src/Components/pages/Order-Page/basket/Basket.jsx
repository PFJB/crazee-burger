import styled from 'styled-components';
import { theme } from '../../../../theme/theme';
import HeaderBasket from './HeaderBasket';
import FooterBasket from './FooterBasket';
import BasketContent from './BasketContent';

export default function Basket() {
    return (
        <BasketStyled>
            <HeaderBasket />
            <BasketContent />
            <FooterBasket />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;
    width: 350px;
    height: 100%;
    height: calc(95vh - 13vh);
    overflow: hidden;
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 0px 20px 0px #00000033 inset;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;