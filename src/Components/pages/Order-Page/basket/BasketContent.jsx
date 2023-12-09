import styled from "styled-components";
import BasketContentEmpty from "./basketContent/BasketContentEmpty";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import BasketProduct from "./basketContent/BasketProducts";

export default function BasketContent() {

    const { basketData } = useContext(OrderContext)

    return (
        <BasketContentStyled>
            {basketData.length !== 0 ? <BasketProduct /> : <BasketContentEmpty />}
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
flex: 1;

`;