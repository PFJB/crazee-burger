import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

export default function ButtonIcone({ label, iconeButton, className, onClick, version }) {
    return (
        <ButtonIconeStyled className={className} onClick={onClick} version={version}>
            {label}
            {iconeButton && iconeButton}
        </ButtonIconeStyled>
    )
}

const ButtonIconeStyled = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    border-radius: ${theme.borderRadius.round};
    font-weight: ${theme.fonts.weights.bold};
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary_burger};
    }

    ${({ version }) => extraStyleButtonIcone[version]}
`

const extraStyleNormal = css`
    color: ${theme.colors.white};
    border-color:  ${theme.colors.primary_burger};
    background-color: ${theme.colors.primary_burger};
    height: 53px;
    width: 400px;
    font-size: ${theme.fonts.P0};
`

const extraStyleSuccess = css`
      width: 275px;
      height: 34px;
      border-color: ${theme.colors.green};
      font-size: ${theme.fonts.size.XS};
      color: ${theme.colors.white};
      background-color: ${theme.colors.green};
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.green};
        color: ${theme.colors.green};
      }
`
const extraStyleButtonIcone = {
    normal: extraStyleNormal,
    success: extraStyleSuccess,
}