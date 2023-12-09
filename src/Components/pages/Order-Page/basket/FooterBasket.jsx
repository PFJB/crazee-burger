import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function FooterBasket() {
    return (
        <FooterBasketStyled >
            <p>Codé avec ❤️ et React.JS</p>
        </FooterBasketStyled>
    )
}

const FooterBasketStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0;
    height: 70px;
    width: 100%;

    color: ${theme.colors.white};
    font-family: ${theme.fonts.family.amatic};
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P2};
    background-color: black;
`;
