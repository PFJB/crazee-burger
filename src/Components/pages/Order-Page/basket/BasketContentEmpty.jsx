import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function BasketContentEmpty() {
    return (
        <BasketContentEmptyStyled>
            Votre commande est vide.
        </BasketContentEmptyStyled>
    )
}

const BasketContentEmptyStyled = styled.p`
    color: ${theme.colors.greyBlue};
    font-family: ${theme.fonts.family.amatic};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
`;
