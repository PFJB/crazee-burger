import { AiOutlinePlus } from "react-icons/ai";

export const getTabConfigs = (tabSelected) => [

    {
        index: "add",
        label:"Ajouter un produit",
        className: tabSelected === "add" ? "is-active" : "",
        icone: <AiOutlinePlus />,
    },
    {
        index: "mod",
        label:"Modifier un produit",
        className: tabSelected === "mod" ? "is-active" : "",
        icone: <AiOutlinePlus />,
    },

]
