import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuroSymbol, MdPhotoCamera } from "react-icons/md";

export const GetTextInputConfigs = (newProduct) => [

    {
        id: "0",
        name: "title",
        placeholder: "Nom du produit (ex: Super Burger)",
        IconeBeforeInput: < FaHamburger />,
        value: newProduct.title,
        version: "panelAdmin",
    },

    {
        id: "1",
        name: "imageSource",
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        IconeBeforeInput: < MdPhotoCamera />,
        value: newProduct.imageSource,
        version: "panelAdmin",
    },

    {
        id: "2",
        name: "price",
        placeholder: "Prix",
        IconeBeforeInput: < MdOutlineEuroSymbol />,
        value: newProduct.price ? newProduct.price : "",
        version: "panelAdmin",
    }
]