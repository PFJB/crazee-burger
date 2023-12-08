import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function HintMessageEdit() {
    return (
        <HintMessageEditStyled>
            Cliquer sur un produit du menu pour le modifier <span>en temps réel</span>
        </HintMessageEditStyled>
    )
}

const HintMessageEditStyled = styled.div`
    color: ${theme.colors.primary};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P0};
    span {
      text-decoration: underline;
    }
`;





