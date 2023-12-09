import styled from "styled-components";
import BasketCard from "./BasketCard";

export default function BasketProducts() {
    return (
        <BasketProductsStylend>
            <BasketCard />
            <BasketCard />
            <BasketCard />


        </BasketProductsStylend>
    )
}

const BasketProductsStylend = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 20px 16px;

flex: 1;
background-color: red;
  
`;
