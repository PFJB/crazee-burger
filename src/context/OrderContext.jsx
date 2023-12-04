import { createContext } from "react";

const OrderContext = createContext({
    IsAdminOn: false,
    setIsAdminOn: () => {},
    tabSelected: "",
    setTabSelected: () => {},
    isCollapse: true, 
    SetIsCollapse: () => {},
    menuData: [],
    setMenuData:() => {},
    handleSubmit: () => {},
    inputName: "",
    setinputName: () => {},
    inputURL: "",
    setInputURL: () => {},
    inputPrice: 0,
    setinputPrice: () => {},
    handleChange: () => {},
    popup: "",
    setPopup: () => {},
});

export default OrderContext