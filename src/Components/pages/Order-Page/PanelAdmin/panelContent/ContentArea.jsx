import styled from "styled-components";
import { theme } from "../../../../../theme/theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { tabConfigs } from "../tabsConfigs";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

export default function ContentArea() {

  const { tabSelected, productSelected } = useContext(OrderContext)

  const test = () => {
    const isCardSelected = productSelected !== EMPTY_PRODUCT;
    const tabs = tabConfigs(isCardSelected)
    const contentToAdd = tabs.find((tab) => tab.index === tabSelected)
    return contentToAdd.content
  }

  return (
    <ContentAreaStyled>{test()}</ContentAreaStyled>
  )
}

const ContentAreaStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding:  31px 0px 49px 71px;
    height: 250px;
    border: solid 1px ${theme.colors.greyLight};
    background-color: ${theme.colors.white};
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: 0px -6px 8px -2px #0000001A;
    transition:all 1s;
`;
