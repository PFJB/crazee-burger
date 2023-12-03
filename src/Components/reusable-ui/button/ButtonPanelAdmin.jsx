import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function ButtonPanelAdmin({icone, text, handleClick, className}){

    let state = true;

    const act = () => {
        if (state === true) {
            
            handleClick()

        }
     }
 
 

    return (
    <ButtonPanelAdminStyled  className={className} onClick={act}>
        <div>
            <span>{icone && icone}</span>
            {text && text}
        </div>
    </ButtonPanelAdminStyled>
  )
}

const ButtonPanelAdminStyled = styled.button`

    height: 43px;
    width: fit-content;
    min-width: 60px;
    padding: 10px 22px 11px 22px;
    border: 1px solid ${theme.colors.greyLight} ;
    border-bottom-width: 2px ;
    border-radius: 5px 5px 0px 0px;
    background-color: ${theme.colors.white};
    box-shadow: 0px -6px 8px -2px #0000001A;
    cursor: pointer;



   
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: 100%;
        color: ${theme.colors.greySemiDark};
        gap: 13px;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

 
`;
