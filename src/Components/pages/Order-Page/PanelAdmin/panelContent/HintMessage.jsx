import styled from 'styled-components';
import { HiCursorClick } from "react-icons/hi";
import { theme } from '../../../../../theme/theme';


export default function HintMessage() {
    return (
        <HintMessageStyled>
            Cliquer sur un produit pour le modifier
            <HiCursorClick />
        </HintMessageStyled>
    )
}

const HintMessageStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-family: 'Amatic SC', sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P3};
    gap: 10px;
`;
