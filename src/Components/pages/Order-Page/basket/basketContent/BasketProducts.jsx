import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
const IMAGE_by_default = "/images/coming-soon.png"


export default function BasketProducts() {

    const { deleteToBasket, basketData, IsAdminOn, setProductSelected, titleEditRef, productSelected } = useContext(OrderContext)

    const handleDeleteBasket = (event, idToDelete) => {
        event.stopPropagation()
        deleteToBasket(idToDelete)
        if (titleEditRef.current !== null && titleEditRef.current !== undefined) { titleEditRef.current.focus() }
    }

    const onClick = (idBasketCardClicked) => {
        const copyProductClickedBasket = basketData.find((product) => product.id === idBasketCardClicked)
        setProductSelected(copyProductClickedBasket)
        if (titleEditRef.current !== null && titleEditRef.current !== undefined) { titleEditRef.current.focus() }
    }

    return (
        <BasketProductsStylend>
            {basketData.map(({ id, title, price, imageSource, quantity }) => {
                return (
                    <BasketCard
                        key={id}
                        title={title}
                        price={formatPrice(price)}
                        imageSource={imageSource ? imageSource : IMAGE_by_default}
                        handleDelete={(event) => handleDeleteBasket(event, id)}
                        quantity={quantity}
                        onClick={IsAdminOn ? () => onClick(id) : null}
                        isAdminOn={IsAdminOn}
                        isSelected={productSelected.id === id}
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
