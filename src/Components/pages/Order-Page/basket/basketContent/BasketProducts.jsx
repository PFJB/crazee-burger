import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";

export default function BasketProducts() {

    const { deleteToBasket, basketData } = useContext(OrderContext)

    const handleDelete = (cardId) => {

        deleteToBasket(cardId)
    }

    return (
        <BasketProductsStylend>
            {basketData.map(({ id, title, price, imageSource, quantity }) => {
                return (
                    <BasketCard
                        key={id}
                        title={title}
                        price={formatPrice(price)}
                        imageSource={imageSource}
                        handleDelete={() => handleDelete(id)}
                        quantity={quantity}
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
