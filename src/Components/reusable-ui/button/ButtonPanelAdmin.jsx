import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function ButtonPanelAdmin({icone, label, handleClick, className}){
    return (
    <ButtonPanelAdminStyled  className={className} onClick={handleClick}>
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
    box-shadow: 0px -6px 8px -2px #0000001A;

    cursor: pointer;

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    &:hover{
        border-bottom: 2px solid ${theme.colors.white};
    }

    .icone {
        display: flex;
    }
`;
