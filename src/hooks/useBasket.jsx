import { useState } from "react"
import { deepCopyArray, findIndexById, findObjectById } from "../utils/arrays"
import { setLocalStorage } from "../utils/window"

export const useBasket = () => {

    const [basketData, setBasketData] = useState([])

    const addToBasket = (idProductToAdd, username) => {
        const basketCopy = deepCopyArray(basketData)
        const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)

        if (productAlreadyInBasket) {
            incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
            return
        }

        createNewBasketProduct(idProductToAdd, basketCopy, setBasketData, username)
    }

    const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
        const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasketData(basketCopy)
        setLocalStorage(username, basketCopy)
    }

    const createNewBasketProduct = (idProductToAdd, basketCopy, setBasketData, username) => {
        const newBasketProduct = { id: idProductToAdd, quantity: 1 }
        const newBasket = [newBasketProduct, ...basketCopy]
        setBasketData(newBasket)
        setLocalStorage(username, newBasket)
    }

    const deleteToBasket = (productId, username) => {
        const copyUpdated = basketData.filter((product) => product.id !== productId)
        setBasketData(copyUpdated)
        setLocalStorage(username, copyUpdated)
    }

    return { basketData, setBasketData, addToBasket, deleteToBasket }
}