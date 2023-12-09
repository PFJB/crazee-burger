import { useState } from "react"
import { fakeMenu2 } from "../assets/fakeData/fakeMenu"
import { deepCopyArray } from "../utils/arrays"

export const useMenu = () => {

    const [menuData, setMenuData] = useState(fakeMenu2)

    const handleAdd = (newProduct) => {
        const copyMenu = deepCopyArray(menuData)
        const newMenu = [deepCopyArray(newProduct), ...copyMenu]
        setMenuData(newMenu)
    }

    const handleCardDelete = (cardId) => {
        const newMenu = deepCopyArray(menuData)
        const menuUpdated = newMenu.filter((product) => product.id !== cardId)
        setMenuData(menuUpdated)

    }

    const handleEdit = (productToEdit) => {
        let menuCopy = deepCopyArray(menuData)
        const indexToEdit = menuCopy.findIndex((product) => product.id === productToEdit.id)
        menuCopy[indexToEdit] = productToEdit
        setMenuData(menuCopy)
    }

    return { handleAdd, handleCardDelete, handleEdit, menuData, setMenuData }
}
