import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function EmptyMenuUsers() {
  return (
    <EmptyMenuUsersStyled>
      <h1>Victime de notre succès ! :D</h1>
      <h2>De nouvelles recettes sont en cours de préparation.</h2>
      <h2>À très vite !</h2>
    </EmptyMenuUsersStyled>
  )
}

const EmptyMenuUsersStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${theme.colors.greyBlue};
    font-family: ${theme.fonts.family.amatic};

    h1{
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        margin-bottom: 21px;
    }
    h2 {

        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        margin-bottom: 31px;
    }

`;