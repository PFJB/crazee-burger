import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { theme } from "../../../theme/theme";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import AddContent from "./PanelAdmin/panelContent/AddContent";
import { useMenu } from "../../../hooks/useMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useBasket } from "../../../hooks/useBasket";
import { json, useParams } from "react-router-dom";
import { getUsers } from "../../../api/user";

export default function OrderPage() {

  const [newProduct, setNewProduct] = useState({ ...EMPTY_PRODUCT, id: new Date().getTime() })
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const [tabSelected, setTabSelected] = useState("add");
  const [contentPanel, SetcontentPanel] = useState(<AddContent />);
  const [IsAdminOn, setIsAdminOn] = useState(false);
  const [isCollapse, SetIsCollapse] = useState(false)
  const titleEditRef = useRef()

  const { basketData, addToBasket, handleEditBasket, deleteToBasket, setBasketData } = useBasket()

  const [pending, SetPending] = useState(true)

  const { userName } = useParams();
  const { handleAdd, handleCardDelete, handleEdit, menuData, resetMenu, setMenuData } = useMenu(userName)
  const orderContext = {
    IsAdminOn, setIsAdminOn, tabSelected,
    setTabSelected, isCollapse, SetIsCollapse,
    contentPanel, SetcontentPanel, menuData, resetMenu,
    handleAdd, newProduct,
    setNewProduct, handleCardDelete, basketData,
    productSelected, setProductSelected, handleEdit, titleEditRef,
    addToBasket, handleEditBasket, deleteToBasket, pending,
  }


  getUsers(userName)
    .then((e) => {
      SetPending(false)
      setMenuData(e.menu)
    })


  return (
    <OrderContext.Provider value={orderContext}>
      <OrderPagestyled>
        <div className="container">
          <Header />
          <Main />
        </div>
      </OrderPagestyled>
    </OrderContext.Provider>
  )
}

const OrderPagestyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.primary};

    .container {
      display: flex;
      position: relative;
      flex-direction: column;
      width: min(100%, 1400px);
      height: 95%;
    }
`;