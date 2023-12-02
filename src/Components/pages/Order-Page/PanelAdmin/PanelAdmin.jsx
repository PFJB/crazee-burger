import styled from "styled-components";
import { theme } from "../../../../theme/theme";




export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
              <div className="ButtonZone">Espace button</div>
              <div className="ActionZone">Espace Action</div>
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`


      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 295px;
      width: 100%;
    .ButtonZone {
      height: 43px;
      width: 100%;
    }
    .ActionZone {
      flex: 1;
      border: solid 1px ${theme.colors.greyLight};
      background-color: ${theme.colors.white};
      border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
      box-shadow: 0px -6px 8px -2px #0000001A;

    }
  
`;