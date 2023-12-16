import styled from "styled-components"
import { theme } from "../../../../theme/theme"
import PanelAdmin from "../PanelAdmin/PanelAdmin.jsx";
import MenuContent from "./menuContent/MenuContent.jsx";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext.jsx";
import EmptyMenu from "./emptyContent/EmptyMenu.jsx";
import EmptyMenuUsers from "./emptyContent/EmptyMenuUsers.jsx";
import PendingMessage from "./emptyContent/PendingMessage.jsx";
import { isEmpty } from "../../../../utils/arrays.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default function MainRightSide() {

    const { IsAdminOn, menuData } = useContext(OrderContext)

    if (!menuData) {
        return (
            <MainRightSideStyled>
                <PendingMessage />
            </MainRightSideStyled>
        )
    }

    return (
        <TransitionGroup component={MainRightSideStyled}>
            {!isEmpty(menuData) ? <MenuContent /> : IsAdminOn ? <EmptyMenu /> : <EmptyMenuUsers />}
            {IsAdminOn &&
                <CSSTransition classNames={"panel-transition"} timeout={{ enter: 500, exit: 0 }}>
                    <PanelAdmin />
                </CSSTransition>}
        </TransitionGroup>
    )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .panel-transition-enter{
    transform: translateY(100%);
    opacity: 0%;
  }
  .panel-transition-enter-active{
    transform: translateY(0%);
    opacity: 100%;
    transition: all 0.5s;
  }
`