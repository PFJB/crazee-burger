import styled from "styled-components";
import { theme } from "../../../../theme/theme";

import { useState } from "react";
import ButtonArea from "./ButtonArea";



export default function PanelAdmin() {
   const [isCollapse, SetIsCollapse] = useState(false)

  return (
      <PanelAdminStyled>
                <ButtonArea  isCollapse={ isCollapse } setIsCollapse={ SetIsCollapse } />
                {isCollapse && <div className="ActionZone" >content</div>}
      </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`

      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      right: 0;
      height: fit-content;
      width: 100%;

    .ActionZone {
        flex: 1;
        min-height: 250px;
        border: solid 1px ${theme.colors.greyLight};
        background-color: ${theme.colors.white};
        border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
        box-shadow: 0px -6px 8px -2px #0000001A;
        transition:all 1s;

    }
    ////////////////////////////////////////
  
`;