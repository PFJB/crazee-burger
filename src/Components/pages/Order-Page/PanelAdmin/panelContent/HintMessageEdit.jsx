import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function HintMessageEdit() {
    return (
        <HintMessageEditStyled>
            Cliquer sur un produit pour le modifier
            <HiCursorClick />
        </HintMessageEditStyled>
    )
}

const HintMessageEditStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${theme.colors.greyBlue};
  font-size: ${theme.fonts.size.P3};
  font-family: 'Amatic SC', sans-serif;
`;
