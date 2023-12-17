import { TiDelete } from "react-icons/ti";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

export default function ButtonDeleteCard({ handleDelete, isSelected }) {
  return (
    <ButtonDeleteCardStyled onClick={handleDelete} isSelected={isSelected}>
      <TransitionGroup>
        <CSSTransition classNames={"transtion"} appear={true} timeout={500}>
          <TiDelete size={40} />
        </CSSTransition>
      </TransitionGroup>
    </ButtonDeleteCardStyled>
  )
}

const ButtonDeleteCardStyled = styled.button`

  display: grid;
  place-items: center;
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  color: ${theme.colors.primary};
  cursor: pointer;
  :hover {
      color: ${theme.colors.red};
  }

  .transtion-appear{
    transform: translateX(100%);
    opacity: 0;
  }
  .transtion-appear-active{
    transform: translateX(0%);
    opacity: 1;
    transition: all 0.5s;

  }

${({ isSelected }) => isSelected && selectedStyle}

`;

const selectedStyle = css`

  color: ${theme.colors.white};

  :active {
      color: ${theme.colors.white};
  }
`