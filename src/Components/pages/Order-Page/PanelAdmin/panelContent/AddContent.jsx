import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "./AdminForm";

export default function AddContent() {

  const { handleAdd, setNewProduct, newProduct, popup } = useContext(OrderContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd()
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  return (

    <AdminForm product={newProduct} onSubmit={handleSubmit} onChange={handleChange} popup={popup} />

  )
}