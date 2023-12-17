import styled, { css } from "styled-components";
import ButtonIcone from "../button/ButtonIcone";
import { theme } from "../../../theme/theme";
import { formatPrice } from "../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../enums/product";
import ButtonDeleteCard from "./ButtonDeleteCard";

export default function Card({ price, imgSource, title, handleDelete, handleClick, isHoverable, isSelected, handleAddToCard }) {

    return (
        <CardStyled onClick={handleClick} $isHoverable={isHoverable} $isSelected={isSelected}>
            {isHoverable && <ButtonDeleteCard handleDelete={handleDelete} isSelected={isSelected} />}
            <div className="picture">{<img src={imgSource ? imgSource : IMAGE_COMING_SOON} alt={title} />}</div>
            <div className="title">{title}</div>
            <div className="priceAdd">
                <p className="price">{formatPrice(price)}</p>
                <ButtonIcone
                    className="versionNormalSmaller"
                    label={"Ajouter"}
                    version="normal"
                    onClick={handleAddToCard}
                />
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 330px;
    width: 240px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    padding: 50px 25px 30px 25px;
    font-family: 'Amatic SC', sans-serif;
    font-size: ${theme.fonts.size.P3};
    background-color: ${({ $selected }) => $selected ? "red" : "white"};
    border-radius: ${theme.borderRadius.extraRound};
    transition: all 0.3s;

    .picture {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 145px;
        margin-bottom: 15px;
      
        img {
            width: 100%;
            height: 100%;  
            object-fit: contain;
        }
    }

    .title {
        display: block;
        text-align: start;
        width: 190px;
        height: 46px;
        font-family: 'Amatic SC', sans-serif;
        font-weight: ${theme.fonts.weights.bold};
        font-size: ${theme.fonts.size.P4};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .priceAdd {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 190px;
        height: 46px;
        font-family: 'Open Sans', sans-serif;

        .price{
            font-size: 16px;
            font-weight: 400;
            color: ${theme.colors.primary};
            font-family: 'Open Sans', sans-serif;
        }
    }

    .versionNormalSmaller {
        width: 95px;
        height: 38px;
        font-size: 11px;
        font-weight: 700;
    }

    ${({ $isHoverable }) => $isHoverable && hoverableStyle}
    ${({ $isSelected, $isHoverable }) => $isHoverable && $isSelected && selectedStyle}
`;

const hoverableStyle = css`
    &:hover{
        transform: scale(1.05);
        transition: ease-out 0.2s;
        cursor: pointer;
        box-shadow: 0px 0px 8px 0px #FF9A23;
    }
`

const selectedStyle = css`
    background-color: ${theme.colors.primary};

    .priceAdd {
        .price {
            color: ${theme.colors.white};
        }
    }

    .versionNormalSmaller{
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};

        &:hover {
            color: ${theme.colors.white};
            background-color: ${theme.colors.primary};
            border: 1px solid ${theme.colors.white};
        }

        &:active{
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary};
        }
    }
`
