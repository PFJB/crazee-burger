import styled from "styled-components";
import TextInput from "../../../../reusable-ui/textInput/TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera, MdOutlineEuroSymbol } from "react-icons/md";
import { theme } from "../../../../../theme/theme";




export default function AddContent() {
  return (
    <AddContentStyled>
      <img src="" alt="" />
      <div>
        <TextInput className="popo" IconeBeforeInput={<FaHamburger />} value={"Nom du produit (ex: Super Burger)"}/>
        <TextInput className="popo" IconeBeforeInput={<MdPhotoCamera />} value={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}/>
        <TextInput className="popo" IconeBeforeInput={<MdOutlineEuroSymbol />} value={"Prix"}/>
        <button className="button">blblbl</button>
      </div>
      </AddContentStyled>
  )
}

const AddContentStyled = styled.form`
display: flex;
position: relative;
  height: 100%;
  width: 100%;
  background-color: aquamarine;
  gap: 20px;

  img {
    width: 215px;
    height: 120px;
    background-color: beige;
  }

  div {
    display: flex;
    flex-direction: column;
    background-color: blue;
    height: 100%;
    width: 100%;
    gap: 8px;
    color: ${theme.colors.greyMedium};


    button {
      width: 275px;
      height: 34px;
    }

    .popo {
      display: flex;
      flex-direction: row;
      margin: 0;
      height: 35px;
      background-color: white;
      padding: 8px 16px, 8px 24px;
      border-radius: 5px;
      color: ${theme.colors.greyMedium};

    }
  }

  

  
`;

