import styled from "styled-components"
import { theme } from "../../../../theme/theme"
import PanelAdmin from "../PanelAdmin/PanelAdmin.jsx";
import MenuContent from "./menuContent/MenuContent.jsx";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext.jsx";
import EmptyMenu from "./emptyContent/EmptyMenu.jsx";
import EmptyMenuUsers from "./emptyContent/EmptyMenuUsers.jsx";
import PendingMessage from "./emptyContent/PendingMessage.jsx";


export default function MainRightSide() {

    const { IsAdminOn, menuData, pending } = useContext(OrderContext)

    if (pending) {
        return (<MainRightSideStyled>
            <PendingMessage />
        </MainRightSideStyled>)
    }


    return (
        <MainRightSideStyled>
            {menuData.length !== 0 && !pending ? <MenuContent /> : IsAdminOn ? <EmptyMenu /> : <EmptyMenuUsers />}
            {IsAdminOn && <PanelAdmin />}
        </MainRightSideStyled>
    )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`