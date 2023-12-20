import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import AdminForm from "../adminForm/AdminForm.jsx";
import SubmitButton from "../adminForm/SubmitButton.jsx";
import { useDisplaySuccessMessage } from "../../../../../../hooks/useDisplaySuccessMessage.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.jsx"
import { deepCopyArray } from "../../../../../../utils/arrays.js";

export default function AddContent() {

  const { handleAdd, setNewProduct, newProduct } = useContext(OrderContext)
  const { displaySuccessMessage, isSubmitted } = useDisplaySuccessMessage()
  const [isAvailable, setIsAvailable] = useState(true)
  const [isAdvertised, setIsAdvertised] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    displaySuccessMessage()
    handleAdd(newProduct)
    setNewProduct({ ...EMPTY_PRODUCT, id: new Date().getTime(), isAdvertised, isAvailable })
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  const handleSelectedChoice = (currentValueSelected, id) => {
    if (id === "stock") {
      let test = deepCopyArray(newProduct)
      test = { ...newProduct, isAvailable: currentValueSelected === "En stock" }
      setNewProduct(test)
      setIsAvailable(currentValueSelected === "En stock")
    }
    if (id === "pub") {
      let test = deepCopyArray(newProduct)
      test = { ...newProduct, isAdvertised: currentValueSelected === "Avec pub" }
      setNewProduct(test)
      setIsAdvertised(currentValueSelected === "Avec pub")
    }

  }

  return (
    <AdminForm product={newProduct} onSubmit={handleSubmit} onChange={handleChange} handleSelectedChoice={handleSelectedChoice} >
      <SubmitButton isSubmitted={isSubmitted} />
    </AdminForm>
  )
}