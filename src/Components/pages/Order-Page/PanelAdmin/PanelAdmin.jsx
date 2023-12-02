import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import ButtonPanelAdmin from "../../../reusable-ui/button/ButtonPanelAdmin";
import { GoChevronUp } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";



export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
              <div className="ButtonZone">
                <ButtonPanelAdmin icone={<GoChevronUp />}/>
                <ButtonPanelAdmin icone={<FiPlus />} text={"Ajouter un produit"}/>
                <ButtonPanelAdmin icone={<MdModeEditOutline />} text={"Modifier un produit"}/>

              </div>
              <div className="ActionZone">Espace Action</div>
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

    }
  
`;