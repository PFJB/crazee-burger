import { theme } from "../../../theme";
import styled from "styled-components"
import LogoImg from "./logo.png"


export default function Logo() {
  return (
    <LogoStyled>
        <p>crazee</p>
        <img src={LogoImg} alt="Logo burger" />
        <p>burger</p>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    height: 150px;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'Amatic SC', sans-serif;
        color: ${theme.colors.primary_burger};
        font-weight: ${theme.weights.bold};
        font-size: 110px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        line-height: 115px;
    }

    img {
        height: 150px;
        width: 200px;
    }
  
`;