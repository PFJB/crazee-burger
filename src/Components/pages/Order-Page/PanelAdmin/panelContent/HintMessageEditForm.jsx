import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function HintMessageEditForm({ version }) {
    return (
        <HintMessageEditFormStyled $version={version}>
            Cliquer sur un produit du menu pour le modifier <span>en temps réel</span>
        </HintMessageEditFormStyled>
    )
}

const HintMessageEditFormStyled = styled.div`

    color: ${theme.colors.primary};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P0};
    span {
      text-decoration: underline;
    }
`;