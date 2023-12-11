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

    const resetMenu = (menuToReset) => {
        setMenuData(menuToReset)
    }


    const addMenudd = (id) => {
        const test = deepCopyArray(menuData)
        const index = test.findIndex((product) => product.id === id)
        test[index].quantity += 1;
        setMenuData(test)
    }

    return { handleAdd, handleCardDelete, handleEdit, menuData, resetMenu, addMenudd }
}
