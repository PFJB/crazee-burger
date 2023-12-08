import styled, { css } from "styled-components";
import ButtonIcone from "../button/ButtonIcone";
import { theme } from "../../../theme/theme";
import { formatPrice } from "../../../utils/maths";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import OrderContext from "../../../context/OrderContext";
const IMAGE_by_default = "/images/coming-soon.png"

export default function Card({ price, imgSource, title, handleDelete, handleClick, isHoverable, isSelected }) {

    const AddToCart = (event) => { event.stopPropagation() }

    return (
        <CardStyled onClick={handleClick} $isHoverable={isHoverable} $isSelected={isSelected}>
            <div className="card" >
                {isHoverable && <button onClick={handleDelete} className="delete"><TiDelete size={40} /></button>}
                <div className="picture">{<img src={imgSource ? imgSource : IMAGE_by_default} alt={title} />}</div>
                <div className="title">{title}</div>
                <div className="priceAdd">
                    <p className="price">{formatPrice(price)}</p>
                    <ButtonIcone
                        className="versionNormalSmaller"
                        label={"Ajouter"}
                        version="normal"
                        onClick={AddToCart}
                    />
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    .card {display: flex;
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

    .delete {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 12px;
        right: 12px;
        border: none;
        background: none;
        color: ${theme.colors.primary};
        cursor: pointer;

        :hover {
            color: ${theme.colors.red};
        }
    }

    ${({ $isHoverable }) => $isHoverable && hoverableStyle}
    ${({ $isSelected, $isHoverable }) => $isHoverable && $isSelected && selectedStyle}

}

    

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

    .delete {
        color: ${theme.colors.white};

        :active {
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
