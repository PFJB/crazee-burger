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
  const [inputName, setinputName] = useState("")
  const [inputURL, setInputURL] = useState("")
  const [inputPrice, setinputPrice] = useState(0)



  const handleChange = (event, setInput) => {
    setInput(event.target.value);
    }
  
    const [popup, setPopup] = useState("hide")
    const closing = () => {setPopup("hide")}

    const handleSubmit = (event) => {
      event.preventDefault()
  
      const copyMenu = [...menuData]
      const newCard  = {
          id: copyMenu.length + 1,
          imageSource: inputURL,
          title: inputName,
          price: inputPrice === "" ? "0" : inputPrice,
          quantity: 0,
          isAvailable: true,
          isAdvertised: false,
        }
        copyMenu.push(newCard)
        setMenuData(copyMenu)
        setPopup("popup")
        setTimeout(closing, 3000)
        setinputName("")
        setInputURL("")
        setinputPrice("")
    }

  const orderContext = {
    IsAdminOn, setIsAdminOn, tabSelected,
    setTabSelected,isCollapse, SetIsCollapse,
    contentPanel, SetcontentPanel, menuData, setMenuData, handleSubmit,
    inputName, setinputName, inputURL, setInputURL,
    inputPrice, setinputPrice, handleChange, popup, setPopup}

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