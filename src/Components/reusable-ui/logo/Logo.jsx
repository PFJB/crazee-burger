import styled from "styled-components"
import LogoImg from "./logo.png"
import { theme } from "../../../theme/theme";


export default function Logo({ className, onClick }) {

  return (
    <LogoStyled className={className} onClick={onClick}>
      <p>crazee</p>
      <img src={LogoImg} alt="Logo burger" />
      <p>burger</p>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    height: fit-content;
    width: fit-content;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'Amatic SC', sans-serif;
        color: ${theme.colors.primary_burger};
        font-weight: ${theme.fonts.weights.bold};
        font-size: ${theme.fonts.size.P4};
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }

    img {
        height: 60px;
        width: 80px;
    }
  
`;