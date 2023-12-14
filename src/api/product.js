import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase-configs"

export const getMenu = async (idUser) => {
    console.log(idUser)
    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const { menu } = docSnapshot.data()
        return menu
    }

}