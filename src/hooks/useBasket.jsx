import { useState } from "react"
import { deepCopyArray } from "../utils/arrays"

export const useBasket = () => {

    const [basketData, setBasketData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const calculateTotalPrice = () => {
        let total = 0;
        basketData.map((product) => {
            total = total + (product.price * product.quantity)
        })
        setTotalPrice(total)
    }

    const addToBasket = async (productToAdd) => {
        const copyBasketContent = deepCopyArray(basketData)
        const isalreadyhere = copyBasketContent.find((product) => productToAdd.id === product.id)
        if (isalreadyhere === undefined) {
            var copyUpdated = [deepCopyArray(productToAdd), ...copyBasketContent]
            await setBasketData(copyUpdated)
        }
        else {

            isalreadyhere.quantity += 1;
            await setBasketData(copyBasketContent)
        }
        calculateTotalPrice()
    }

    const deleteToBasket = (productId) => {
        const copyBasketContent = deepCopyArray(basketData)
        const copyUpdated = copyBasketContent.filter((product) => product.id !== productId)
        setBasketData(copyUpdated)
        calculateTotalPrice()
    }

    const handleEditBasket = (productToEdit) => {
        let copyBasketContent = deepCopyArray(basketData)
        const indexToEdit = copyBasketContent.findIndex((product) => product.id === productToEdit.id)
        copyBasketContent[indexToEdit] = productToEdit
        setBasketData(copyBasketContent)
        calculateTotalPrice()
    }


    return { basketData, setBasketData, addToBasket, deleteToBasket, totalPrice, setTotalPrice, handleEditBasket, calculateTotalPrice }
}