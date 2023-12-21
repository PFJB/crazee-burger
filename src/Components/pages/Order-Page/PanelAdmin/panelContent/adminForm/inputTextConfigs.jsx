import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuroSymbol, MdPhotoCamera } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { BsMegaphoneFill } from "react-icons/bs";
import { optionIsAdvertised, optionIsAvailable } from "../../../../../../enums/select";

export const GetTextInputConfigs = (newProduct) => [

    {
        id: "0",
        name: "title",
        placeholder: "Nom du produit (ex: Super Burger)",
        IconeBeforeInput: < FaHamburger />,
        value: newProduct.title ? newProduct.title : "",
        version: "panelAdmin",
    },

    {
        id: "1",
        name: "imageSource",
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        IconeBeforeInput: < MdPhotoCamera />,
        value: newProduct.imageSource ? newProduct.imageSource : "",
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

export const GetSelectConfigs = (product) => [
    {
        id: "stock",
        name: "isAvailable",
        selected: product.isAvailable,
        icone: < FiPackage />,
        option: optionIsAvailable,
    },
    {
        id: "pub",
        name: "isAdvertised",
        selected: product.isAdvertised,
        icone: < BsMegaphoneFill />,
        option: optionIsAdvertised,
    }
]