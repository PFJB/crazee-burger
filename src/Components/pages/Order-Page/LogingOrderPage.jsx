import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function LogingOrderPage() {
    //state
    const {userName} = useParams();

    //Comportements

    //affichage
  return (
    <LogingOrderPageStyled>
        <p>Hey, <span>{userName}</span></p>
        <Link to={"/"} className="decoStyle">Se déconnecter</Link>
    </LogingOrderPageStyled>
  )
}

const LogingOrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    font-family: 'Open Sans', sans-serif;
    gap: ${theme.spacing.xxs};

    .decoStyle {
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.fonts.size.XXS};
      font-weight: ${theme.fonts.weights.regular};
      line-height: 14px;
      letter-spacing: 0em;
      text-align: right;
      text-decoration: none;
    }

    span {
      color: ${theme.colors.primary_burger};
      font-weight: ${theme.fonts.weights.bold};
    }
  `;