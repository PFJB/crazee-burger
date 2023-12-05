import { AiOutlinePlus } from "react-icons/ai";
import AddContent from "./panelContent/AddContent";
import ModifyContent from "./panelContent/ModifyContent";

export const tabConfigs = () => [

    {
        index: "add",
        label:"Ajouter un produit",
        icone: <AiOutlinePlus />,
        content: <AddContent />,
    },
    {
        index: "mod",
        label:"Modifier un produit",
        icone: <AiOutlinePlus />,
        content: <ModifyContent />,

    },

]
