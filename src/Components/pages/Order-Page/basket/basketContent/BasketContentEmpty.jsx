import styled from "styled-components";
import { theme } from "../../../../../theme/theme";
import { BASKET_MESSAGE } from "../../../../../enums/product";

export default function BasketContentEmpty({ isLoading }) {

    return (
        <BasketContentEmptyStyled>
            {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
        </BasketContentEmptyStyled>
    )
}

const BasketContentEmptyStyled = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8em;
    height: 100%;
    color: ${theme.colors.greyBlue};
    font-family: ${theme.fonts.family.amatic};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
`;
