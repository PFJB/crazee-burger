import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "./AdminForm";
import SubmitButton from "./SubmitButton";
import { useDisplaySuccessMessage } from "../../../../../hooks/useDisplaySuccessMessage";

export default function AddContent() {

  const { handleAdd, setNewProduct, newProduct } = useContext(OrderContext)
  const { displaySuccessMessage, isSubmitted } = useDisplaySuccessMessage()

  const handleSubmit = (event) => {
    event.preventDefault()
    displaySuccessMessage()
    handleAdd()
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  return (
    <AdminForm product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </AdminForm>
  )
}