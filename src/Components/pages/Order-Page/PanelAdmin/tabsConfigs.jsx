import { AiOutlinePlus } from "react-icons/ai";
import AddContent from "./panelContent/addProduct/AddContent";
import HintMessageEdit from "./panelContent/editProduct/HintMessageEdit";
import EditContent from "./panelContent/editProduct/EditContent";

export const tabConfigs = (isCardSelected) => [

    {
        index: "add",
        label: "Ajouter un produit",
        icone: <AiOutlinePlus />,
        content: <AddContent />,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        icone: <AiOutlinePlus />,
        content: isCardSelected ? <EditContent /> : <HintMessageEdit />,
    },

]
