import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function BasketProducts() {

    const { deleteToBasket, basketData } = useContext(OrderContext)

    return (
        <BasketProductsStylend>
            {basketData.map(({ id, title, price, imageSource }) => {
                return (
                    <BasketCard
                        key={id}



                    />
                )
            })}
        </BasketProductsStylend>
    )
}

const BasketProductsStylend = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
padding: 20px 16px;
gap: 20px;
`;
