import styled from "styled-components"
import { theme } from "../../../../theme/theme"
import PanelAdmin from "../PanelAdmin/PanelAdmin.jsx";
import MenuContent from "./menuContent/MenuContent.jsx";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext.jsx";


export default function MainRightSide() {

    const { IsAdminOn } = useContext(OrderContext)

    return (
        <MainRightSideStyled>
            <MenuContent />
            {IsAdminOn && <PanelAdmin />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`