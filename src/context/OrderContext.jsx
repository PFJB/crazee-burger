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
    newProduct: {},
    setnewProduct: () => { },

    popup: "",
    setPopup: () => { },
    handleCardDelete: () => { },

    productSelected: {},
    setProductSelected: () => { },

    handleEdit: () => { },

    titleEditRef: {},
});

export default OrderContext