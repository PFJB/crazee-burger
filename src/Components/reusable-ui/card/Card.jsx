import styled, { css } from "styled-components";
import ButtonIcone from "../button/ButtonIcone";
import { theme } from "../../../theme/theme";
import { formatPrice } from "../../../utils/maths";
import { IMAGE_COMING_SOON, STOCK_EPUISE } from "../../../enums/product";
import ButtonDeleteCard from "./ButtonDeleteCard";
import Ribbon from "./Ribbon.jsx";
import { fadeIn, fadeInFromTop } from "../../../theme/animation";

export default function Card({ price, imgSource, title, handleDelete, handleClick, isHoverable, isSelected, handleAddToCard, isAvailable, isAdvertised }) {

    return (
        <CardStyled
            onClick={handleClick}
            $isHoverable={isHoverable}
            $isSelected={isSelected}
            $isAvailable={isAvailable}
        >
            {isAdvertised && <Ribbon label="Nouveau" />}
            <div className="card">
                {isHoverable && <ButtonDeleteCard handleDelete={handleDelete} isSelected={isSelected} />}
                <div className="picture"><img src={imgSource ? imgSource : IMAGE_COMING_SOON} alt={title} /></div>
                <div className="title">{title}</div>
                <div className="priceAdd">
                    <p className="price">{formatPrice(price)}</p>
                    <ButtonIcone
                        className="versionNormalSmaller"
                        label={"Ajouter"}
                        version="normal"
                        onClick={handleAddToCard}
                        disabled={!isAvailable}
                    />
                </div>
                {!isAvailable &&
                    <div className="rupture" >
                        <img className="epuise" src={STOCK_EPUISE} alt="Stock épuisé" />
                    </div>}
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
    box-shadow: ${theme.shadows.medium};
    padding: 50px 25px 30px 25px;
    font-family: ${theme.fonts.family.amatic};
    font-size: ${theme.fonts.size.P3};
    border-radius: ${theme.borderRadius.extraRound};
    background-color: ${theme.colors.white};

    & .card{
        opacity: ${({ $isAvailable }) => !$isAvailable && "70%"};
    }

    .rupture{
        display: flex;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: hsla(0, 0%, 100%, 0.75);
        border-radius: ${theme.borderRadius.extraRound};
        animation: ${fadeIn} ${theme.animationTime.fast};
    
        .epuise{
            width: 80%;
            object-fit: contain;
            animation: ${fadeInFromTop} ${theme.animationTime.fast};
        }
    }

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
        font-family: ${theme.fonts.family.amatic};
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
        font-family: ${theme.fonts.family.openSans};

        .price{
            max-width: 95px;
            text-overflow: ellipsis;
            overflow-x: hidden;
            font-size: 16px;
            font-weight: ${theme.fonts.weights.regular};
            color: ${theme.colors.primary};
            font-family: ${theme.fonts.family.openSans};
        }
    }

    .versionNormalSmaller {
        position: relative;
        z-index: 2;
        width: 95px;
        height: 38px;
        font-size: 11px;
        font-weight: ${theme.fonts.weights.bold};

        cursor: ${({ $isAvailable }) => !$isAvailable && "not-allowed"};
        opacity: ${({ $isAvailable }) => !$isAvailable && "60%"};
    }

    ${({ $isHoverable }) => $isHoverable && hoverableStyle}
    ${({ $isSelected, $isHoverable }) => $isHoverable && $isSelected && selectedStyle}
`;

const hoverableStyle = css`
    &:hover{
        transform: scale(1.05);
        transition: ease-out 0.2s;
        cursor: pointer;
        box-shadow: ${theme.shadows.orangeHighlight};
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
        border: none;
        

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
