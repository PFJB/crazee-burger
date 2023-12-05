import { createContext } from "react";

const OrderContext = createContext({
    IsAdminOn: false,
    setIsAdminOn: () => { },
    tabSelected: "",
    setTabSelected: () => { },
    isCollapse: true,
    SetIsCollapse: () => { },
    menuData: [],
    setMenuData: () => { },
    handleAdd: () => { },
    newProduct: [],
    setnewProduct: () => { },

    popup: "",
    setPopup: () => { },
    handleCardDelete: () => { },
});

export default OrderContext