import styled from "styled-components";
import BasketEmptyMessage from "./basketContent/BasketEmptyMessage";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import BasketProduct from "./basketContent/BasketProducts";
import { isEmpty } from "../../../../utils/arrays";

export default function BasketContent() {

    const { basketData, menuData } = useContext(OrderContext)

    return (
        <BasketContentStyled>
            {isEmpty(basketData) ? <BasketEmptyMessage isLoading={!menuData} /> : <BasketProduct />}
        </BasketContentStyled>
    )
}
const BasketContentStyled = styled.div`
    height: 100%;
    overflow-y: scroll;
`;