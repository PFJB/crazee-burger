import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

export default function TextInput({ value, onChange, IconeBeforeInput, version, name, placeholder }) {

  return (
    <InputStyled version={version}>
      {IconeBeforeInput && IconeBeforeInput}
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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
    border-radius: ${theme.borderRadius.round};
    input{
        width: 100%;
        border: none;
        border-radius: ${theme.borderRadius.round};
        outline-style: none;
    }
    input::placeholder {
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.greyMedium};
    }

    ${(props) => {
    if (props.version === 'normal') return extraStyleNormal
    if (props.version === 'panelAdmin') return extraStyledPanel
  }}
`;

const extraStyleNormal = css`

    width: 400px;
    color: ${theme.colors.greySemiDark};
    background-color: ${theme.colors.white};
    gap: 13px;
    padding: 18px 24px 18px 24px;

    input{
      background-color: ${theme.colors.white};
    }

  `

const extraStyledPanel = css`

    height: 35px;
    color: ${theme.colors.greyMedium};
    background-color: ${theme.colors.background_white};
    padding: 8px 16px 8px 24px;
    gap: 15px;

    input{
      background-color: ${theme.colors.background_white};
    }
`