import styled from "styled-components";
import TextInput from "../../../../reusable-ui/textInput/TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdOutlineEuroSymbol } from "react-icons/md";
import { theme } from "../../../../../theme/theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { GrValidate } from "react-icons/gr";

export default function AddContent() {

  const { handleAdd, popup, setNewProduct, newProduct } = useContext(OrderContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd()
  }

  const handleChange = (event) => { setNewProduct({ ...newProduct, [event.target.name]: event.target.value }) }

  return (
    <AddContentStyled onSubmit={handleSubmit}>
      <div className="image">{newProduct.imageSource ? <img src={newProduct.imageSource} alt="Added picture" /> : "Aucune image"}</div>
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
          <button className="button">Ajouter un nouveau produit au menu</button>
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

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    width: 215px;
    height: 120px;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    font-family: 'Open Sans', sans-serif;
    color: ${theme.colors.greyMedium};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .inputArea {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 8px;
    color: ${theme.colors.greyMedium};

    button {
      position: relative;
      width: 275px;
      height: 34px;
      border: solid 1px ${theme.colors.green};
      border-radius: ${theme.borderRadius.round};
      font-family: Arial, sans-serif;
      font-size: ${theme.fonts.size.XS};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.white};
      background-color: ${theme.colors.green};
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.white};
        border-color: ${theme.colors.green};
        color: ${theme.colors.green};
      }
    }

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

