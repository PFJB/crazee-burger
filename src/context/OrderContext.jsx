import { createContext } from "react";

const OrderContext = createContext({
    IsAdminOn: false,
    setIsAdminOn: () => { },
    tabSelected: "",
    setTabSelected: () => { },
    isCollapse: true,
    SetIsCollapse: () => { },
    resetMenu: () => { },
    handleAdd: () => { },
    newProduct: {},
    setnewProduct: () => { },

    handleCardDelete: () => { },

    productSelected: {},
    setProductSelected: () => { },

    handleEdit: () => { },

    titleEditRef: {},
    basketData: [],

    addToBasket: () => { },
    deleteToBasket: () => { },

    userName: ""
});

export default OrderContext