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

    handleEditBasket: () => { },
    pending: false
});

export default OrderContext