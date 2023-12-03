import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import ButtonPanelAdmin from "../../../reusable-ui/button/ButtonPanelAdmin";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import AddProduct from "./panelContent/AddProduct";
import ModifyProduct from "./panelContent/ModifyProduct";



export default function PanelAdmin() {
   const [toggleIsOn, setToggleIsOn] = useState(false)
   const [icone, setIcone] = useState(<GoChevronDown />)

   const [state, setState] = useState("close")
   const [contentPanel, setContentPanel] = useState("content")

    const togglePanel = () => {
      setToggleIsOn(toggleIsOn === false ? true : false)
        setIcone(toggleIsOn === false ? <GoChevronUp/> : <GoChevronDown />)
        setState(toggleIsOn === false ? "close" : "open")
    }

    const toggleContent = (content) => {
        setContentPanel(content)
      

    }


  return (
      <PanelAdminStyled>
                <div className="ButtonZone">
                  <ButtonPanelAdmin className={state} icone={icone} handleClick={togglePanel} />
                  <ButtonPanelAdmin className={state} icone={<FiPlus />} handleClick={() => toggleContent(<AddProduct />)} text={"Ajouter un produit"}/>
                  <ButtonPanelAdmin className={state} icone={<MdModeEditOutline />} handleClick={() => toggleContent( <ModifyProduct />)} text={"Modifier un produit"}/>
                </div>
                {toggleIsOn && <div className="ActionZone" >{contentPanel}</div>}
      </PanelAdminStyled>
  )
}

const PanelAdminStyled = styled.div`

      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      right: 0;
      height: fit-content;
      width: 100%;

    .ButtonZone {
        display: flex;
        flex-direction: row;
        padding-left: 71px;
        height: 43px;
        width: fit-content;
        max-width: 100%;

    }

    .ActionZone {
        flex: 1;
        min-height: 250px;
        border: solid 1px ${theme.colors.greyLight};
        background-color: ${theme.colors.white};
        border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
        box-shadow: 0px -6px 8px -2px #0000001A;
        transition:all 1s;

    }
    ////////////////////////////////////////

.open{
    top: 0;
}

.close{
    top: 1px;
}
  
`;