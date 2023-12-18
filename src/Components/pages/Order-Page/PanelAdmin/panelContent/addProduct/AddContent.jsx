import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import AdminForm from "../adminForm/AdminForm.jsx";
import SubmitButton from "../adminForm/SubmitButton.jsx";
import { useDisplaySuccessMessage } from "../../../../../../hooks/useDisplaySuccessMessage.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.jsx"

export default function AddContent() {

  const { handleAdd, setNewProduct, newProduct } = useContext(OrderContext)
  const { displaySuccessMessage, isSubmitted } = useDisplaySuccessMessage()

  const handleSubmit = (event) => {
    event.preventDefault()
    displaySuccessMessage()
    handleAdd(newProduct)
    console.log(newProduct)
    setNewProduct({ ...EMPTY_PRODUCT, id: new Date().getTime() })
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  const handleSelectedChoice = (value, id) => {
    if (id === "stock") { setNewProduct({ ...newProduct, ["isAvailable"]: value === "En stock" }) }
    if (id === "pub") { setNewProduct({ ...newProduct, ["isAdvertised"]: value === "Avec pub" }) }
  }

  return (
    <AdminForm product={newProduct} onSubmit={handleSubmit} onChange={handleChange} handleSelectedChoice={handleSelectedChoice} >
      <SubmitButton isSubmitted={isSubmitted} />
    </AdminForm>
  )
}