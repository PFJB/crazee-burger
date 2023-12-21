import styled, { css } from "styled-components"
import LogoImg from "./logo.png"
import { theme } from "../../../theme/theme";

export default function Logo({ className, onClick, size = "order" }) {

  return (
    <LogoStyled className={className} onClick={onClick} $size={size}>
      <p>crazee</p>
      <img src={LogoImg} alt="Logo burger" />
      <p>burger</p>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;

    p {
        font-family: 'Amatic SC', sans-serif;
        color: ${theme.colors.primary_burger};
        font-weight: ${theme.fonts.weights.bold};
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }

  ${({ $size }) => GetSize($size)}
`;

const GetSize = (size) => {
  if (size === "order") { return sizeOrder }
  if (size === "home") { return sizeHome }
}

const sizeOrder = css`

  p{
    font-size: ${theme.fonts.size.P4};
  }
  img {
    height: 60px;
    width: 80px;
  }
`

const sizeHome = css`

  p{
    font-size: ${theme.fonts.size.P7};
  }
  img {
    height: 150px;
    width: 200px;
  }
`