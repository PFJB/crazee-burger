import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

export default function ButtonPanelAdmin({ icone, label, handleClick, className, selected }) {
    return (
        <ButtonPanelAdminStyled className={className} onClick={handleClick} $selected={selected}>
            <div className="icone">{icone && icone}</div>
            {label}
        </ButtonPanelAdminStyled>
    )
}

const ButtonPanelAdminStyled = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    top: 1px;

    height: 43px;
    padding: 10px 22px 11px 22px;
    gap: 13px;

    border: 1px solid ${theme.colors.greyLight} ;
    border-bottom-width: 2px;
    border-radius: 5px 5px 0px 0px;

    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};

    cursor: pointer;

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    &:hover{
        border-bottom: 2px solid ${theme.colors.white};
        text-decoration-line: underline;
    }

    .icone {
        display: flex;
    }

    ${({ $selected }) => $selected && tabSelectedStyle}
`;

const tabSelectedStyle = css`
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};

    &:hover{
        border-bottom: 2px solid ${theme.colors.dark};
        text-decoration-line: underline;
    }
`