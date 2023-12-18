import { FiPackage } from "react-icons/fi";
import { BsMegaphoneFill } from "react-icons/bs";


export const GetSelectConfigs = (product) => [
    {
        id: "stock",
        selected: product.isAvailable ? "En stock" : "Rupture",
        icone: < FiPackage />,
        option: ["En stock", "Rupture"],
    },
    {
        id: "pub",
        selected: product.isAdvertised ? "Avec pub" : "Sans pub",
        icone: < BsMegaphoneFill />,
        option: ["Sans pub", "Avec pub"],
    }
]