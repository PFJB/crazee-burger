import styled from "styled-components";
import BasketContentEmpty from "./BasketContentEmpty";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

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