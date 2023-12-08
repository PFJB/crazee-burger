import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "./AdminForm";
import { GrValidate } from "react-icons/gr";
import ButtonIcone from "../../../../reusable-ui/button/ButtonIcone";

export default function AddContent() {

  const { handleAdd, setNewProduct, newProduct, popup } = useContext(OrderContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd()
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  return (
    <AdminForm
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      popup={popup}
    >
      <>
        <ButtonIcone
          label="Ajouter un nouveau produit au menu"
          version='success'>
        </ButtonIcone>
        {popup ? <span><GrValidate />Ajouté avec succès !</span> : ""}
      </>
    </AdminForm>
  )
}


