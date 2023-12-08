import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { theme } from "../../../theme/theme";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu1, fakeMenu2 } from "../../../assets/fakeData/fakeMenu";
import AddContent from "./PanelAdmin/panelContent/AddContent";
import PanelAdmin from "./PanelAdmin/PanelAdmin";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { deepCopyArray } from "../../../utils/arrays";

export default function OrderPage() {
  const [menuData, setMenuData] = useState(fakeMenu2)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)

  const [tabSelected, setTabSelected] = useState("add");
  const [contentPanel, SetcontentPanel] = useState(<AddContent />);
  const [IsAdminOn, setIsAdminOn] = useState(false);
  const [isCollapse, SetIsCollapse] = useState(false)
  const [popup, setPopup] = useState(false)

  const titleEditRef = useRef()



  const handleAdd = () => {
    const copyMenu = deepCopyArray(menuData)
    const newMenu = [{ ...newProduct }, ...copyMenu]

    setMenuData(newMenu)
    setNewProduct({ ...EMPTY_PRODUCT, id: new Date().getTime() })
    setPopup(true)
    setTimeout(() => { setPopup(false) }, 3000)
  }

  const handleCardDelete = (cardId) => {
    const newMenu = deepCopyArray(menuData)
    const menuUpdated = newMenu.filter((product) => product.id !== cardId)
    setMenuData(menuUpdated)
    cardId === productSelected.id ? setProductSelected(EMPTY_PRODUCT) : ""

  }

  const handleEdit = (productToEdit) => {
    let menuCopy = deepCopyArray(menuData)
    const indexToEdit = menuCopy.findIndex((product) => product.id === productToEdit.id)
    menuCopy[indexToEdit] = productToEdit
    setMenuData(menuCopy)
  }

  const orderContext = {
    IsAdminOn, setIsAdminOn, tabSelected,
    setTabSelected, isCollapse, SetIsCollapse,
    contentPanel, SetcontentPanel, menuData,
    setMenuData, handleAdd, newProduct,
    setNewProduct, popup, setPopup, handleCardDelete,
    productSelected, setProductSelected, handleEdit, titleEditRef
  }

  return (
    <OrderContext.Provider value={orderContext}>
      <OrderPagestyled>
        <div className="container">
          <Header />
          <Main />
          {IsAdminOn && <PanelAdmin />}
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