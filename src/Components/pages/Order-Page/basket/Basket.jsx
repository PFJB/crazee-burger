import styled from 'styled-components';
import { theme } from '../../../../theme/theme';
import HeaderBasket from './HeaderBasket';
import FooterBasket from './FooterBasket';
import BasketContent from './BasketContent';
import { formatPrice } from '../../../../utils/maths';
import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';

export default function Basket() {

    const { basketData, menuData } = useContext(OrderContext)


    const calculateTotalPrice = () => {
        let total = 0;
        basketData.map((product) => {
            if (!isNaN(product.price)) {
                total = total + (product.price * product.quantity)
            }
        })
        return (total)
    }



    return (
        <BasketStyled>
            <HeaderBasket amountToPay={menuData ? formatPrice(calculateTotalPrice()) : formatPrice(0)} />
            <BasketContent />
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
    box-shadow: 0px 0px 20px 0px #00000033 inset;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;