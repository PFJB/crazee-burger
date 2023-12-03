import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { theme } from "../../../theme/theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import PanelAdmin from "./panelAdmin/PanelAdmin";

export default function OrderPage() {

  const [tabSelected , setTabSelected] = useState("add");
  const [IsAdminOn , setIsAdminOn] = useState(false);
  const [isCollapse, SetIsCollapse] = useState(false)
  const orderContext = {IsAdminOn, setIsAdminOn, tabSelected , setTabSelected,isCollapse, SetIsCollapse}

  return (
      <OrderContext.Provider value={orderContext}>
        <OrderPagestyled>
              <div className="container">
                <Header />
                <Main />
                {IsAdminOn && <PanelAdmin />}
              </div>
        </OrderPagestyled>
      </OrderContext.Provider>
  )
}

const OrderPagestyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.primary};

    .container {
      display: flex;
      position: relative;
      flex-direction: column;
      width: min(100%, 1400px);
      height: 95%;
    }
`;