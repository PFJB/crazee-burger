import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import AdminForm from "./AdminForm"
import HintMessageEditForm from "./HintMessageEditForm"

export default function ModifyContent() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef, handleEditBasket } = useContext(OrderContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    const productOnChange = { ...productSelected, [name]: value }
    setProductSelected(productOnChange)
    handleEdit(productOnChange)
    handleEditBasket(productOnChange)
  }

  return (
    <AdminForm onChange={handleChange} product={productSelected} ref={titleEditRef}>
      <HintMessageEditForm />
    </AdminForm>
  )
}