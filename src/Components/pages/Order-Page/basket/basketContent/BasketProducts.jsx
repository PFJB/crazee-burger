import styled from "styled-components";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { EMPTY_PRODUCT, IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/arrays";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BasketProductsAnimation } from "../../../../../theme/animation";

export default function BasketProducts() {

    const { menuData, deleteToBasket, basketData, IsAdminOn, setProductSelected, titleEditRef, productSelected, userName, SetIsCollapse, setTabSelected } = useContext(OrderContext)

    const handleDeleteBasket = (event, idToDelete) => {
        event.stopPropagation()
        deleteToBasket(idToDelete, userName)
        if (titleEditRef.current) { titleEditRef.current.focus() }
    }

    const onClick = async (id) => {
        let selected = menuData.find((product) => product.id === id)
        selected = selected === productSelected ? EMPTY_PRODUCT : selected;
        await SetIsCollapse(true)
        await setTabSelected("mod")
        await setProductSelected(selected)
        if (titleEditRef.current !== null && titleEditRef.current !== undefined) { titleEditRef.current.focus() }
    }


    return (
        <TransitionGroup component={BasketProductsStyled}>
            {basketData.map((product) => {
                const cardData = findObjectById(product.id, menuData)
                return (
                    <CSSTransition appear={true} classNames={"animationBasket"} key={product.id} timeout={500}>
                        <BasketCard
                            title={cardData.title}
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

${BasketProductsAnimation}
`;
