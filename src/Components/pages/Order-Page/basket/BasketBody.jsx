import styled from "styled-components";
import BasketEmptyMessage from "./basketContent/BasketEmptyMessage";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import BasketProduct from "./basketContent/BasketProducts";
import { isEmpty } from "../../../../utils/arrays";

export default function BasketBody() {

    const { basketData, menuData } = useContext(OrderContext)

    return (
        <BasketBodyStyled>
            {isEmpty(basketData) ? <BasketEmptyMessage isLoading={!menuData} /> : <BasketProduct />}
        </BasketBodyStyled>
    )
}
const BasketBodyStyled = styled.div`
    overflow-y: scroll;
    flex: 1;
`;