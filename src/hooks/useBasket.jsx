import { useState } from "react"
import { deepCopyArray } from "../utils/arrays"

export const useBasket = () => {

    const [basketData, setBasketData] = useState([])

    const addToBasket = (product) => {
        const copyBasketContent = deepCopyArray(basketData)
        const copyUpdated = [deepCopyArray(product), ...copyBasketContent]
        setBasketData(copyUpdated)
    }

    const deleteToBasket = (productId) => {
        const copyBasketContent = deepCopyArray(basketData)
        const copyUpdated = copyBasketContent.filter((product) => product.id !== productId)
        setBasketData(copyUpdated)
    }


    return { basketData, setBasketData, addToBasket, deleteToBasket }
}