import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-configs"
import { fakeMenu2 } from "../assets/fakeData/fakeMenu"

export const getUsers = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        return userReceived
    }

}

export const addUser = (idUser) => {
    const docRef = doc(db, "users", idUser)
    const newDoc = {
        username: idUser,
        menu: fakeMenu2,
    }
    setDoc(docRef, newDoc)
}

export const editUserData = (idUser, newMenu) => {
    const docRef = doc(db, "users", idUser)
    const newDoc = {
        username: idUser,
        menu: newMenu,
    }
    setDoc(docRef, newDoc)
}

export const authenticateUsers = async (idUser) => {
    const existingUser = await getUsers(idUser)

    if (!existingUser) {
        addUser(idUser)
    }
}

