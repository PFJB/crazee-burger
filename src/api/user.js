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

export const addUser = (userName) => {
    const docRef = doc(db, "users", userName)
    const newDoc = {
        username: userName,
        menu: fakeMenu2,
    }
    setDoc(docRef, newDoc)
}

export const editUserData = (userName, newMenu) => {
    const docRef = doc(db, "users", userName)
    const newDoc = {
        username: userName,
        menu: newMenu,
    }
    setDoc(docRef, newDoc)
}

export const authenticateUsers = async (username) => {
    const existingUser = await getUsers(username)

    if (!existingUser) {
        addUser(username)
    }
}

