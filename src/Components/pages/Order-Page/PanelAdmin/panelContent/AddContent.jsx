import styled from "styled-components";
import TextInput from "../../../../reusable-ui/textInput/TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdOutlineEuroSymbol } from "react-icons/md";
import { theme } from "../../../../../theme/theme";




export default function AddContent() {
  return (
    <AddContentStyled onClick={() => {  event.preventDefault()
    }}>
      <div className="image">Aucune image</div>
      <div>
        <TextInput className="popo" IconeBeforeInput={<FaHamburger />} value={"Nom du produit (ex: Super Burger)"}/>
        <TextInput className="popo" IconeBeforeInput={<MdPhotoCamera />} value={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}/>
        <TextInput className="popo" IconeBeforeInput={<MdOutlineEuroSymbol />} value={"Prix"}/>
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

  }

  div {
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

    }
  }

  

  
`;

