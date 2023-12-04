import styled from "styled-components";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { theme } from "../../../theme/theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import PanelAdmin from "./panelAdmin/PanelAdmin";
import AddContent from "./panelAdmin/panelContent/AddContent";
import { fakeMenu1, fakeMenu2 } from "../../../assets/fakeData/fakeMenu";

export default function OrderPage() {
  const [menuData, setMenuData] = useState(fakeMenu2)
  const [tabSelected , setTabSelected] = useState("add");
  const [contentPanel , SetcontentPanel] = useState(<AddContent />);
  const [IsAdminOn , setIsAdminOn] = useState(false);
  const [isCollapse, SetIsCollapse] = useState(false)

  const [newProduct, setNewProduct] = useState({
    id:"",
    title: "",
    imageSource: "",
    price: 0,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  })

  const [popup, setPopup] = useState("hide")
  const closing = () => {setPopup("hide")}

   const handleAdd = () => {
  
      const copyMenu = [...menuData]
      const newMenu = [{...newProduct}, ...copyMenu]

      setMenuData(newMenu)
      setNewProduct({
        id:"",
        title: "",
        imageSource: "",
        price: 0,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
      })

      setPopup("popup")
      setTimeout(closing, 3000)
    }

  const orderContext = {
    IsAdminOn, setIsAdminOn, tabSelected,
    setTabSelected,isCollapse, SetIsCollapse,
    contentPanel, SetcontentPanel, menuData, setMenuData, handleAdd, newProduct, setNewProduct, popup, setPopup}

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

    .popup {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.success};
      gap: 8px;
    }
    .hide{display: none;}

`;