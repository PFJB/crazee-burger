import { AiOutlinePlus } from "react-icons/ai";
import AddContent from "./panelContent/addProduct/AddContent";
import ModifyContent from "./panelContent/editProduct/ModifyContent";
import HintMessageEdit from "./panelContent/editProduct/HintMessageEdit";

export const tabConfigs = (isCardSelected) => [

    {
        index: "add",
        label: "Ajouter un produit",
        icone: <AiOutlinePlus />,
        content: <AddContent />,
    },
    {
        index: "mod",
        label: "Modifier un produit",
        icone: <AiOutlinePlus />,
        content: isCardSelected ? <ModifyContent /> : <HintMessageEdit />,

    },

]
