import { GrValidate } from "react-icons/gr";
import ButtonIcone from "../../../../../reusable-ui/button/ButtonIcone";
import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";

export default function SubmitButton({ isSubmitted }) {
    return (
        <SubmitButtonStyled>
            <ButtonIcone
                label="Ajouter un nouveau produit au menu"
                version='success'>
            </ButtonIcone>
            {isSubmitted && <div className="popup"><span><GrValidate /></span>Ajouté avec succès !</div>}
        </SubmitButtonStyled>
    )
}

const SubmitButtonStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.green};
  gap: 15px;

.popup {
    display: flex;
    flex-direction: row;
    gap: 5px;

    span{
    display: flex;
    align-items: center;
  }
}
`;