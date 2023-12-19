import { findObjectById } from "../../../../../utils/arrays";

export const calculateTotalPrice = (basketData, menuData) => {
    let total = 0;

    basketData.map((product) => {
        const find = findObjectById(product.id, menuData)
        if (!isNaN(find.price) && find.isAvailable) {
            total = total + (find.price * product.quantity)
        }
    })
    return total
}