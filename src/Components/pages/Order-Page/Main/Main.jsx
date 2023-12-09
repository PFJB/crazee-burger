import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import MainRightSide from "./MainRightSide";
import Basket from "../basket/Basket.jsx";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  display: grid;

  grid-template-columns: 350px 1fr;
  height: calc(95vh - 13vh);

  background: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
