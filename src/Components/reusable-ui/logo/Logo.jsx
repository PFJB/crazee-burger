import styled, { css } from "styled-components"
import LogoImg from "./logo.png"
import { theme } from "../../../theme/theme";

export default function Logo({ className, onClick, version = "order" }) {

  return (
    <LogoStyled className={className} onClick={onClick} $version={version}>
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

  ${({ $version }) => GetSize($version)}
`;

const GetSize = (version) => {
  if (version === "order") { return versionOrder }
  if (version === "home") { return versionHome }
}

const versionOrder = css`
 cursor: pointer;

  p{
    font-size: ${theme.fonts.size.P4};
  }
  img {
    height: 60px;
    width: 80px;
  }

`

const versionHome = css`

  p{
    font-size: ${theme.fonts.size.P7};
  }
  img {
    height: 150px;
    width: 200px;
  }
`