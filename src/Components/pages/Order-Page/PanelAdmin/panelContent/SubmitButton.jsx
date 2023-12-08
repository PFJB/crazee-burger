import { GrValidate } from "react-icons/gr";
import ButtonIcone from "../../../../reusable-ui/button/ButtonIcone";

export default function SubmitButton({ popup }) {
    return (
        <>
            <ButtonIcone
                label="Ajouter un nouveau produit au menu"
                version='success'>
            </ButtonIcone>
            {popup ? <span><GrValidate />Ajouté avec succès !</span> : ""}
        </>
    )
}
