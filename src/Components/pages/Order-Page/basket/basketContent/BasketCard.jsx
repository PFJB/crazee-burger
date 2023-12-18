import styled, { css } from "styled-components";
import { theme } from "../../../../../theme/theme";
import { MdDeleteForever } from "react-icons/md";
import CasinoEffect from "../../../../reusable-ui/casinoEffect.jsx/CasinoEffect";

export default function BasketCard({ title, price, imageSource, quantity, handleDelete, isAdminOn, onClick, isSelected, className }) {
    return (
        <BasketCardStyled $isAdminOn={isAdminOn} onClick={onClick} $isSelected={isSelected} className={className}>
            <div className="pic"><img src={imageSource} alt={title} /></div>
            <div className="info">
                <div className="description">
                    <p className="title">{title}</p>
                    <p className="price">{price}</p>
                </div>
                <div className="qte">x <CasinoEffect count={quantity} /></div>
            </div>
            <button className="buttonDelete" onClick={handleDelete} ><MdDeleteForever size={'27px'} /></button>
        </BasketCardStyled >
    )
}

const BasketCardStyled = styled.div`

display: grid;
position: relative;
grid-template-columns: 1fr 2.5fr;
grid-template-rows: 86px;
width: 100%;
padding:8px 16px ;
box-shadow: -4px 4px 15px 0px #00000033;
border-radius: ${theme.borderRadius.round};
background-color: #FFFFFF;
overflow: hidden;
transition: all 0.3s;


.pic > img {
    width: 100%;
    height: 100%;  
    object-fit: contain;
}

.info{

    display: grid;
    grid-template-columns: 55% 45%;
    margin-left: 21px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.openSans};
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P0};

    .description{
        display: grid;
        grid-template-rows: 1fr 1fr;
        align-items: center;

        .title{
            color: ${theme.colors.dark};
            font-family: ${theme.fonts.family.amatic};
            font-weight: ${theme.fonts.weights.bold};
            font-size: ${theme.fonts.size.P3};
            overflow-x: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price {
            overflow-x: hidden;
            text-overflow: ellipsis;
        }
    }

    .qte{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 14px;
    }
}

.buttonDelete {
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 27%;
    border: none;
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    cursor: pointer;

    :hover{
        color: ${theme.colors.dark};
    }

    :active{
        color: ${theme.colors.white};
    }
}

${({ $isAdminOn }) => $isAdminOn && getHoverable}
${({ $isSelected, $isAdminOn }) => $isSelected && $isAdminOn && selectedStyle}

`;

const getHoverable = css`
    cursor: pointer;
    &:hover button{ display: flex; }
`
const selectedStyle = css`

    background-color: ${theme.colors.primary};
    .description .price, .qte {
        color: ${theme.colors.white}
    }
`
