import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function HeaderBasket() {
    return (
        <HeaderBasketStyled className='headerPrice'>
            <p className="total">Total</p>
            <p>0,00 €</p>
        </HeaderBasketStyled>
    )
}

const HeaderBasketStyled = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0px 16px 0px 16px;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.amatic};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 2px;

    .total{
        font-weight: ${theme.fonts.weights.regular};
    }
`;
