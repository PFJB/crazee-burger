import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import AdminForm from "./AdminForm"
import HintMessageEditForm from "./HintMessageEditForm"
import { deepCopyArray } from "../../../../../utils/arrays"

export default function ModifyContent() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef, menuData } = useContext(OrderContext)

  const handleChange = (event) => {

    const { name, value } = event.target
    const index = menuData.findIndex((product) => product.id === productSelected.id)
    const copy = deepCopyArray(menuData[index]);




    const newProductSelected = { ...copy, [name]: value }
    setProductSelected(newProductSelected)
    handleEdit(newProductSelected)
  }

  return (
    <AdminForm onChange={handleChange} product={productSelected} ref={titleEditRef}>
      <HintMessageEditForm />
    </AdminForm>
  )
}