import { useState } from "react"
import { deepCopyArray } from "../utils/arrays"

export const useBasket = () => {

    const [basketData, setBasketData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addToBasket = async (productToAdd) => {
        const copyBasketContent = deepCopyArray(basketData)
        let total = totalPrice + productToAdd.price;
        await setTotalPrice(total)
        const isalreadyhere = copyBasketContent.find((product) => productToAdd.id === product.id)
        if (isalreadyhere === undefined) {
            var copyUpdated = [deepCopyArray(productToAdd), ...copyBasketContent]
            await setBasketData(copyUpdated)
        }
        else {

            isalreadyhere.quantity += 1;
            await setBasketData(copyBasketContent)
        }
    }

    const deleteToBasket = (productId) => {
        const copyBasketContent = deepCopyArray(basketData)
        const copyUpdated = copyBasketContent.filter((product) => product.id !== productId)
        setBasketData(copyUpdated)
    }


    return { basketData, setBasketData, addToBasket, deleteToBasket, totalPrice, setTotalPrice }
}