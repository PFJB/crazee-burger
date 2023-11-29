import styled from "styled-components";
import { theme } from "../../../theme/index";

export default function ButtonIcone({label, iconeButton}) {
  return (
        <ButtonIconeStyled>
            <span>{label}</span>
            {iconeButton && iconeButton}
        </ButtonIconeStyled>
  )
}

const ButtonIconeStyled = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P0};
    height: 53px;
    width: 400px;
    border: solid 1px ${theme.colors.primary_burger};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    margin-top: 18px;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary_burger};
    }
`