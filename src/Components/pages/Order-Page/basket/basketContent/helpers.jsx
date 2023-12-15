import { findObjectById } from "../../../../../utils/arrays";
import { formatPrice } from "../../../../../utils/maths";

export const calculateTotalPrice = (basketData, menuData) => {
    let total = 0;

    basketData.map((product) => {
        const find = findObjectById(product.id, menuData)
        console.log(product)
        if (!isNaN(find.price)) {
            total = total + (find.price * product.quantity)
        }
    })
    return total
}