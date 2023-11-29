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
        <p>Hey, {userName}</p>
        <Link to={"/"} className="decoStyle">Se déconnecter</Link>
    </LogingOrderPageStyled>
  )
}

const LogingOrderPageStyled = styled.div`
    font-size: ${theme.fonts.size.P0};

    .decoStyle {
      font-family: Open Sans;
      font-size: ${theme.fonts.size.XXS};
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0em;
      text-align: right;
      text-decoration: none;

    }




  `;