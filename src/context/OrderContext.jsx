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
});

export default OrderContext