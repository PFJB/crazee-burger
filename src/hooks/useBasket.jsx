import { useState } from "react"

export const useBasket = () => {

    const [basketData, setBasketData] = useState({})


    return { basketData, setBasketData }
}