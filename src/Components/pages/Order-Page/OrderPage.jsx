import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PanelAdmin from "./PanelAdmin/PanelAdmin";
import { theme } from "../../../theme/theme";
import OrderContext from "../../../context/OrderContext.jsx";
import { useState } from "react";

export default function OrderPage() {

  const [IsAdminOn , setIsAdminOn] = useState(false);
  const orderContext = {IsAdminOn, setIsAdminOn}

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