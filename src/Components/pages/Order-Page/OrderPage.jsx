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
position: absolute;
flex-wrap: wrap;
width: 100%;
height: 100%;
background-color: aliceblue;

`;

const PageStyled = styled.div`

display: flex;
position: relative;
width: 100%;
height: 100%;
box-shadow: 0px 8px 20px 8px #00000033 inset;


`;