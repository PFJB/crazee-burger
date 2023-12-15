import { useContext, useState } from "react"
import OrderContext from "../../../../../context/OrderContext"
import AdminForm from "./AdminForm"
import HintMessageEditForm from "./HintMessageEditForm"
import SavingMessage from "./SavingMessage"
import { useDisplaySuccessMessage } from "../../../../../hooks/useDisplaySuccessMessage"

export default function ModifyContent() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef, handleEditBasket, userName } = useContext(OrderContext)
  const [valueOnFocus, setValueOnFocus] = useState()
  const { displaySuccessMessage, isSubmitted: isSaved } = useDisplaySuccessMessage()
  const handleChange = (event) => {
    const { name, value } = event.target
    const productOnChange = { ...productSelected, [name]: value }
    setProductSelected(productOnChange)
    handleEdit(productOnChange)
    handleEditBasket(productOnChange, userName)
  }

  const handleOnFocus = (event) => {
    const inputValueOnFocus = event.target.value
    setValueOnFocus(inputValueOnFocus)
  }

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value
    valueOnFocus !== valueOnBlur ? displaySuccessMessage() : null
  }

  return (
    <AdminForm
      onChange={handleChange}
      product={productSelected}
      ref={titleEditRef}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {!isSaved ? <HintMessageEditForm /> : <SavingMessage />}
    </AdminForm>
  )
}