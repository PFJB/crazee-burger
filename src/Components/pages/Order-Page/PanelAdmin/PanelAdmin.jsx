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
   const [open, setOpen] = useState("none")
   const [icone, setIcone] = useState(<GoChevronDown />)
   const [contentPanel, setContentPanel] = useState("content")

   const [ajout, setAjout] = useState("actif")

  
    const togglePanel = () => {
        setOpen(open === "none" ? "block" : "none")
        setIcone(open === "none" ? <GoChevronUp/> : <GoChevronDown />)
    }

    const toggleContent = (content) => {
        if(open === "none"){setOpen("block")}
        setContentPanel(content)
    }


  return (
      <PanelAdminStyled>
                <div className="ButtonZone">
                  <ButtonPanelAdmin icone={icone} handleClick={togglePanel} />
                  <ButtonPanelAdmin className={ajout} icone={<FiPlus />} handleClick={() => toggleContent(<AddProduct />)} text={"Ajouter un produit"}/>
                  <ButtonPanelAdmin icone={<MdModeEditOutline />} handleClick={() => toggleContent( <ModifyProduct />)} text={"Modifier un produit"}/>
                </div>
                <div className="ActionZone"  style={{display: open}}>{contentPanel}</div>
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

.actif{
    background-color: aqua;
}
  
`;