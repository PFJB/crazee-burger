import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext.jsx";
import ButtonArea from "./ButtonArea.jsx";
import ContentArea from "./panelContent/ContentArea.jsx";
import { fadeInFromBottom } from "../../../../theme/animation";
import { theme } from "../../../../theme/theme.js";

export default function PanelAdmin() {
  const { isCollapse } = useContext(OrderContext)

  return (
    <PanelAdminStyled>
      <ButtonArea />
      {isCollapse && <ContentArea />}
    </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`

    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;

   animation: ${fadeInFromBottom} ${theme.animationTime.fast}; 
`;