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
            <div className="containerPanel">
              <div className="ButtonZone">Espace button</div>
              <div className="ActionZone">Espace Action</div>
            </div>
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
      position: relative;
      flex-direction: column;
      width: min(100%, 1400px);
      height: 95%;
    }

    .containerPanel {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 295px;
      width: 100%;
    }
    .ButtonZone {
      height: 43px;
      width: 100%;
    }
    .ActionZone {
      flex: 1;
      border: solid 1px ${theme.colors.greyLight};
      background-color: ${theme.colors.white};
      border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
      box-shadow: 0px -6px 8px -2px #0000001A;

    }
`;