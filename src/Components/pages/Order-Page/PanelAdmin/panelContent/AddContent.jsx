import styled from "styled-components";
import TextInput from "../../../../reusable-ui/textInput/TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdOutlineEuroSymbol } from "react-icons/md";
import { theme } from "../../../../../theme/theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { GrValidate } from "react-icons/gr";
import ButtonIcone from "../../../../reusable-ui/button/ButtonIcone";
import ImagePreview from "./ImagePreview";

export default function AddContent() {

  const { handleAdd, popup, setNewProduct, newProduct } = useContext(OrderContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd()
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  return (
    <AddContentStyled onSubmit={handleSubmit}>

      <ImagePreview imageSource={newProduct.imageSource} />

      <div className="inputArea">
        <TextInput
          name="title"
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
          IconeBeforeInput={<FaHamburger />}
          value={newProduct.title}
          version={"panelAdmin"}
        />

        <TextInput
          name="imageSource"
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          IconeBeforeInput={<MdPhotoCamera />}
          value={newProduct.imageSource}
          version={"panelAdmin"}
        />

        <TextInput
          name="price"
          onChange={handleChange}
          placeholder="Prix"
          IconeBeforeInput={<MdOutlineEuroSymbol />}
          value={newProduct.price ? newProduct.price : ""}
          version={"panelAdmin"}
        />

        <div className="buttonArea">
          <ButtonIcone
            label="Ajouter un nouveau produit au menu"
            version='success'>
          </ButtonIcone>
          {popup ? <span><GrValidate />Ajouté avec succès !</span> : ""}
        </div>

      </div>
    </AddContentStyled>
  )
}

const AddContentStyled = styled.form`

  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  gap: 20px;

  .inputArea {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 8px;
    color: ${theme.colors.greyMedium};

    .buttonArea {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 15px;

      span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.success};
      gap: 8px;
    }
    }
  }
`;

