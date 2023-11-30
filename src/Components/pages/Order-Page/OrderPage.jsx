import styled from "styled-components";
import Header from "./Header/Header";
import { theme } from "../../../theme/theme";

export default function OrderPage() {

  return (
    <OrderPagestyled>
          <div className="container">
            <Header />
            <PageStyled></PageStyled>
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

const PageStyled = styled.div`

    display: flex;
    flex: 1;
    background-color: white;
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`;