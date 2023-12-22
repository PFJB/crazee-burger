import styled from 'styled-components';
import { theme } from '../../../../theme/theme';
import HeaderBasket from './HeaderBasket';
import FooterBasket from './FooterBasket';
import { formatPrice } from '../../../../utils/maths';
import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';
import { calculateTotalPrice } from './basketContent/helpers';
import BasketBody from './BasketBody';

export default function Basket() {

    const { basketData, menuData } = useContext(OrderContext)
    const sumToPay = calculateTotalPrice(basketData, menuData)

    return (
        <BasketStyled>
            <HeaderBasket amountToPay={formatPrice(sumToPay)} />
            <BasketBody />
            <FooterBasket />
        </BasketStyled>
    )
}

const BasketStyled = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    height: calc(95vh - 13vh);
    overflow: hidden;
    background-color: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;