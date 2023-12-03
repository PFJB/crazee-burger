import styled from "styled-components";
import { theme } from "../../../../theme/theme.js";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext.jsx";
import ButtonArea from "./ButtonArea.jsx";

export default function PanelAdmin() {
   const {isCollapse} = useContext(OrderContext)

  return (
      <PanelAdminStyled>
                <ButtonArea />
                {isCollapse && <div className="ActionZone" >rtyh</div>}
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
`;