import { TiDelete } from "react-icons/ti";
import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";
import { fadeInFromRigth } from "../../../theme/animation";

export default function ButtonDeleteCard({ handleDelete, isSelected }) {
  return (
    <ButtonDeleteCardStyled onClick={handleDelete} $isSelected={isSelected}>
      <TiDelete size={40} />
    </ButtonDeleteCardStyled>
  )
}

const ButtonDeleteCardStyled = styled.button`

  display: grid;
  place-items: center;
  position: absolute;
  z-index: 2;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  color: ${theme.colors.primary};
  animation: ${fadeInFromRigth} 500ms ;
  cursor: pointer;


  &:hover, &:focus{
    color: ${theme.colors.red};
  }
  :active {
      color: ${theme.colors.primary};
  }

  ${({ $isSelected }) => $isSelected && selectedStyle}

`;

const selectedStyle = css`

  color: ${theme.colors.white};

  :active {
      color: ${theme.colors.white};
  }
`