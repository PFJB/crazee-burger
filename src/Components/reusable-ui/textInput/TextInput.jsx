import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";
import React from "react";

const TextInput = React.forwardRef(
  ({ value, onChange, IconeBeforeInput, version = "normal", name, placeholder, className, ...extraProps }, ref) => (
    <InputStyled version={version} className={className}>
      <span className="icone">{IconeBeforeInput && IconeBeforeInput}</span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...extraProps}
        type="text"
        ref={ref}
      />
    </InputStyled>
  )
)
TextInput.displayName = "TextInput";
export default TextInput

const InputStyled = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.borderRadius.round};

  height: 100%;
    input{
        width: 100%;
        border: none;
        border-radius: ${theme.borderRadius.round};
        outline-style: none;
  height: 100%;

    }
    input::placeholder {
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.greyMedium};
    }
    .icone{
      display: grid;
      place-content: center;
      font-size: 15px;
    }

    ${({ version }) => extraStyle[version]}
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

    color: ${theme.colors.greyMedium};
    background-color: ${theme.colors.background_white};
    padding: 8px 16px 8px 24px;
    gap: 15px;

    input{
      background-color: ${theme.colors.background_white};
    }
`
const extraStyle = {
  normal: extraStyleNormal,
  panelAdmin: extraStyledPanel,
}