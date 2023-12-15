import styled from "styled-components";
import BasketContentEmpty from "./basketContent/BasketContentEmpty";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import BasketProduct from "./basketContent/BasketProducts";

export default function BasketContent() {

    const { basketData, menuData } = useContext(OrderContext)

    return (
        <BasketContentStyled>
            {basketData.length !== 0 ? <BasketProduct /> : <BasketContentEmpty isLoading={!menuData} />}
        </BasketContentStyled>
    )
}
const BasketContentStyled = styled.div`
height: 100%;
overflow-y: scroll;

`;