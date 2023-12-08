import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "./AdminForm";
import SubmitButton from "./SubmitButton";

export default function AddContent() {

  const { handleAdd, setNewProduct, newProduct, popup } = useContext(OrderContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd()
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  return (
    <AdminForm product={newProduct} onSubmit={handleSubmit} onChange={handleChange} popup={popup}>
      <SubmitButton popup={popup} />
    </AdminForm>
  )
}


