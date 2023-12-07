import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"

export default function ModifyContent() {

  const { setProductSelected, productSelected } = useContext(OrderContext)

  return (
    <div>
      ModifyProduct
      <span>{productSelected && productSelected.title}</span>
    </div>

  )
}

