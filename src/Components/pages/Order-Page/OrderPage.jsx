import styled from "styled-components";
import Header from "./Header";

export default function OrderPage() {



  return (
    <OrderPagestyled>
        <Header />
      <PageStyled>
      </PageStyled>
    </OrderPagestyled>
  )
}

const OrderPagestyled = styled.div`

display: flex;
flex-direction: column;

width: 100vw;
height: 100vh;  
`;

const PageStyled = styled.div`

display: flex;
width: 100%;
height: 100%;
box-shadow: 0px 8px 20px 8px #00000033 inset;


`;