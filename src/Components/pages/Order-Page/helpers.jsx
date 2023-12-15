import { getMenu } from "../../../api/product"
import { getLocalStorage } from "../../../utils/window"

const initializeMenu = async (userName, setMenuData) => {
    const menuReceived = await getMenu(userName)
    setMenuData(menuReceived)
}

const initializeBasket = (userName, setBasketData) => {
    const basketReceived = getLocalStorage(userName)
    if (basketReceived) { setBasketData(basketReceived) }
}

export const initializeUserSession = async (userName, setMenuData, setBasketData) => {
    await initializeMenu(userName, setMenuData)
    initializeBasket(userName, setBasketData)
}