import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function PendingMessage() {
    return (
        <PendingMessageStyled>CHARGEMENT EN COURS ...</PendingMessageStyled>
    )
}

const PendingMessageStyled = styled.div`
    display: grid;
    place-content: center;

    font-family: ${theme.fonts.family.amatic};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
`;