import styled from "styled-components";
import Header from "./Header/Header";
import { theme } from "../../../theme/theme";
import Main from "./Main/Main";

export default function OrderPage() {

  return (
    <OrderPagestyled>
          <div className="container">
            <Header />
            <Main />
          </div>
    </OrderPagestyled>
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
      flex-direction: column;
      width: min(100%, 1400px);
      height: 95%;
    }
`;