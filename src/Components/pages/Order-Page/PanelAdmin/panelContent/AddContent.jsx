import styled from "styled-components";
import TextInput from "../../../../reusable-ui/textInput/TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdOutlineEuroSymbol } from "react-icons/md";
import { theme } from "../../../../../theme/theme";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";


export default function AddContent() {

const {menuData, setMenuData} = useContext(OrderContext)
const [inputName, setinputName] = useState("")
const [inputURL, setInputURL] = useState("")
const [inputPrice, setinputPrice] = useState("")


const handleChange = (event, setInput) => {
  setInput(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault()

    const copyMenu = [...menuData]
    const newCard  = {
        id: copyMenu.length + 1,
        imageSource: inputURL,
        title: inputName,
        price: inputPrice === "" ? "0" : inputPrice,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
      }

      copyMenu.push(newCard)
      setMenuData(copyMenu)
      console.log(copyMenu)
  }

  return (
    <AddContentStyled onSubmit={handleClick}>
      <div className="image">{inputURL === "" ? "Aucune image" : <img src={inputURL} alt="Added picture"/>}</div>
      <div className="inputArea">
        <TextInput className="popo" onChange={() => handleChange(event, setinputName)} placeholder="Nom du produit (ex: Super Burger)" IconeBeforeInput={<FaHamburger />} value={inputName}/>
        <TextInput className="popo" onChange={() => handleChange(event, setInputURL)} placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" IconeBeforeInput={<MdPhotoCamera />} value={inputURL}/>
        <TextInput className="popo" onChange={() => handleChange(event, setinputPrice)} placeholder="Prix" IconeBeforeInput={<MdOutlineEuroSymbol />} value={inputPrice}/>
        <button className="button">Ajouter un nouveau produit au menu</button>
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
    }

    :hover {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.green};
      color: ${theme.colors.green};
    }

    .popo {
      display: flex;
      flex-direction: row;
      margin: 0;
      height: 35px;
      background-color: ${theme.colors.background_white};
      padding: 8px 16px, 8px 24px;
      border-radius: ${theme.borderRadius.round};
      color: ${theme.colors.greyMedium};
      gap: 15px;
      input::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }
  }
`;

