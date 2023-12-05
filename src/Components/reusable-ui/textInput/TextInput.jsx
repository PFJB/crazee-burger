import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";
import { version } from "react";

export default function TextInput({ value, onChange, IconeBeforeInput, version }) {

  return (
    <InputStyled version={version}>
      {IconeBeforeInput && IconeBeforeInput}
      <input
        value={value}
        onChange={onChange}
        type="text"
      />
    </InputStyled>
  )
}

const InputStyled = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 53px;
        width: 400px;
        padding: 18px 24px 18px 24px;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.white};
        margin-top: 18px;
        color: ${theme.colors.greySemiDark};
        gap: 13px;

        input{
            width: 100%;
            border: none;
            border-radius: ${theme.borderRadius.round};
            background-color: ${theme.colors.white};
            outline-style: none;
        }

        input::placeholder {
            color:  #D3D3D3;
            font-size: ${theme.fonts.P0};
        }
    ${(props) => {
    if (props.version === 'normal') return extraStyleNormal
    if (props.version === 'panelAdmin') return extraStyledPanel
  }}
`;

const extraStyleNormal = css`


  `

const extraStyledPanel = css`
    display: flex;
    flex-direction: row;
    margin: 0;
    height: 35px;
    background-color: ${theme.colors.background_white};
    padding: 8px 16px, 8px 24px;
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.greyMedium};
    gap: 15px;
    input::placeholder {
        color: ${theme.colors.greyMedium};
    }

`