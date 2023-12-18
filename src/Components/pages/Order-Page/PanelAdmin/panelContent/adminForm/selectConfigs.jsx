import { FiPackage } from "react-icons/fi";
import { BsMegaphoneFill } from "react-icons/bs";


export const selectConfigs = [
    {
        id: "stock",
        icone: < FiPackage />,
        option: ["En stock", "Rupture"],
    },
    {
        id: "pub",
        icone: < BsMegaphoneFill />,
        option: ["Sans pub", "Avec pub"],
    }
]