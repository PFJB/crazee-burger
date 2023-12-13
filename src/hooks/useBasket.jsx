import { useState } from "react"
import { deepCopyArray } from "../utils/arrays"

export const useBasket = (userName) => {

    const [basketData, setBasketData] = useState([])

    const addToBasket = (productToAdd) => {

        const copyBasketContent = deepCopyArray(basketData)
        const isalreadyhere = copyBasketContent.find((product) => productToAdd.id === product.id)

        if (!isalreadyhere) {
            var copyUpdated = [deepCopyArray(productToAdd), ...copyBasketContent]
            setBasketData(copyUpdated)
            return
        }
        isalreadyhere.quantity += 1;
        setBasketData(copyBasketContent)
    }

    const deleteToBasket = (productId) => {
        const copyUpdated = basketData.filter((product) => product.id !== productId)
        setBasketData(copyUpdated)
    }

    const handleEditBasket = (productToEdit) => {
        let copyBasketContent = deepCopyArray(basketData)
        const indexToEdit = copyBasketContent.findIndex((product) => product.id === productToEdit.id)
        copyBasketContent[indexToEdit].title = productToEdit.title
        copyBasketContent[indexToEdit].imageSource = productToEdit.imageSource
        copyBasketContent[indexToEdit].price = productToEdit.price
        setBasketData(copyBasketContent)
    }

    return { basketData, setBasketData, addToBasket, deleteToBasket, handleEditBasket }
}