import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { useContext } from "react";
import EmptyMenu from "./emptyContent/EmptyMenu";
import OrderContext from "../../../../context/OrderContext";
import MenuContent from "./menuContent/MenuContent";
import EmptyMenuUsers from "./emptyContent/EmptyMenuUsers";

export default function Main() {

  const {menuData, IsAdminOn} = useContext(OrderContext)

  if ( menuData.length !== 0 ) {return (<Mainstyled><MenuContent/></Mainstyled>)}
  else {return (<Mainstyled>{IsAdminOn ? <EmptyMenu />: <EmptyMenuUsers/>}</Mainstyled>)}
}

const Mainstyled = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
  box-shadow: 0px 8px 20px 8px #00000033 inset;
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`;
