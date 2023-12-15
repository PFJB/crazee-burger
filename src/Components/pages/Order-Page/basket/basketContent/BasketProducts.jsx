import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/arrays";

export default function BasketProducts() {

    const { menuData, deleteToBasket, basketData, IsAdminOn, setProductSelected, titleEditRef, productSelected, userName } = useContext(OrderContext)

    const handleDeleteBasket = (event, idToDelete) => {
        event.stopPropagation()
        deleteToBasket(idToDelete, userName)
        if (titleEditRef.current) { titleEditRef.current.focus() }
    }

    const onClick = (idBasketCardClicked) => {
        const copyProductClickedBasket = findObjectById(idBasketCardClicked, basketData)
        setProductSelected(copyProductClickedBasket)
        if (titleEditRef.current) { titleEditRef.current.focus() }
    }

    return (
        <BasketProductsStylend>
            {basketData.map((product) => {
                const cardData = findObjectById(product.id, menuData)
                return (
                    <BasketCard
                        key={cardData.id}
                        title={cardData.title}
                        price={formatPrice(cardData.price)}
                        imageSource={cardData.imageSource ? cardData.imageSource : IMAGE_COMING_SOON}
                        handleDelete={(event) => handleDeleteBasket(event, cardData.id)}
                        quantity={product.quantity}
                        onClick={IsAdminOn ? () => onClick(cardData.id) : null}
                        isAdminOn={IsAdminOn}
                        isSelected={productSelected.id === cardData.id}
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
