import { formatPrice } from "../../../../../utils/maths";

export const calculateTotalPrice = (basketData) => {
    let total = 0;
    basketData.map((product) => {
        if (!isNaN(product.price)) {
            total = total + (product.price * product.quantity)
        }
    })
    return formatPrice(total)
}