import { useState } from "react"
import { deepCopyArray } from "../utils/arrays"
import { setLocalStorage } from "../utils/window"

export const useBasket = () => {

    const [basketData, setBasketData] = useState([])

    const addToBasket = (productToAdd, username) => {

        const copyBasketContent = deepCopyArray(basketData)
        const isalreadyhere = copyBasketContent.find((product) => productToAdd.id === product.id)

        if (!isalreadyhere) {
            var copyUpdated = [deepCopyArray(productToAdd), ...copyBasketContent]
            setBasketData(copyUpdated)
            setLocalStorage(username, copyUpdated)
            return
        }
        isalreadyhere.quantity += 1;
        setBasketData(copyBasketContent)
        setLocalStorage(username, copyBasketContent)

    }

    const deleteToBasket = (productId, username) => {
        const copyUpdated = basketData.filter((product) => product.id !== productId)
        setBasketData(copyUpdated)
        setLocalStorage(username, copyUpdated)

    }

    const handleEditBasket = (productToEdit, username) => {
        let copyBasketContent = deepCopyArray(basketData)
        const indexToEdit = copyBasketContent.findIndex((product) => product.id === productToEdit.id)
        if (indexToEdit !== -1) {
            copyBasketContent[indexToEdit].title = productToEdit.title
            copyBasketContent[indexToEdit].imageSource = productToEdit.imageSource
            copyBasketContent[indexToEdit].price = productToEdit.price
            setBasketData(copyBasketContent)
            setLocalStorage(username, copyBasketContent)
        }
    }

    return { basketData, setBasketData, addToBasket, deleteToBasket, handleEditBasket }
}