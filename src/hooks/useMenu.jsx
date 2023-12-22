import { useState } from "react"
import { deepCopyArray } from "../utils/arrays"
import { editUserData } from "../api/user"

export const useMenu = (userName) => {

    const [menuData, setMenuData] = useState(undefined)

    const handleAdd = (newProduct) => {
        const copyMenu = deepCopyArray(menuData)
        const newMenu = [deepCopyArray(newProduct), ...copyMenu]
        setMenuData(newMenu)
        editUserData(userName, newMenu)
    }

    const handleCardDelete = (cardId) => {
        const newMenu = deepCopyArray(menuData)
        const menuUpdated = newMenu.filter((product) => product.id !== cardId)
        setMenuData(menuUpdated)
        editUserData(userName, menuUpdated)
    }

    const handleEdit = (productToEdit) => {
        let menuCopy = deepCopyArray(menuData)
        const indexToEdit = menuCopy.findIndex((product) => product.id === productToEdit.id)
        menuCopy[indexToEdit] = productToEdit
        setMenuData(menuCopy)
        editUserData(userName, menuCopy)
    }

    const resetMenu = (menuToReset) => {
        setMenuData(menuToReset)
        editUserData(userName, menuToReset)
    }

    return { handleAdd, handleCardDelete, handleEdit, menuData, resetMenu, setMenuData }
}