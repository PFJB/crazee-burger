import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/arrays";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
        <TransitionGroup component={BasketProductsStyled}>
            {basketData.map((product) => {
                const cardData = findObjectById(product.id, menuData)
                return (
                    <CSSTransition appear={true} classNames={"test"} key={product.id} timeout={500}>
                        <BasketCard
                            title={cardData.title}
                            className={"animationCard"}
                            price={formatPrice(cardData.price)}
                            imageSource={cardData.imageSource ? cardData.imageSource : IMAGE_COMING_SOON}
                            handleDelete={(event) => handleDeleteBasket(event, cardData.id)}
                            quantity={product.quantity}
                            onClick={IsAdminOn ? () => onClick(cardData.id) : null}
                            isAdminOn={IsAdminOn}
                            isSelected={productSelected.id === cardData.id}
                        />
                    </CSSTransition>)
            })}
        </TransitionGroup>
    )
}

const BasketProductsStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
padding: 20px 16px;
gap: 10px;
overflow: hidden;

.test-appear {
    transform: translateX(100%);
    opacity: 0%;
}
.test-appear-active {
    transform: translateX(0%);
    opacity: 100%;
    transition: all 0.5s;
}

.test-enter {
    transform: translateX(100%);
    opacity: 0%;
}
.test-enter-active {
    transform: translateX(0%);
    opacity: 100%;
    transition: all 0.5s;
}

.test-exit-enter {
    transform: translateX(0%);
    opacity: 100%;
}
.test-exit-active {
    opacity: 0%;
    transform: translateX(-100%);
    transition: all 0.5s;
}
`;
