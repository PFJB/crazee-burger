import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function BasketCard({ title, price, imageSource, quantity }) {
    return (
        <BasketCardStyled>
            <div className="pic"><img src={imageSource} alt={title} /></div>
            <div className="info">
                <div className="description">
                    <p className="title">{title}</p>
                    <p className="price">{price}</p>
                </div>
                <p className="qte">x {quantity}</p>
            </div>
        </BasketCardStyled>
    )
}

const BasketCardStyled = styled.div`

display: grid;
grid-template-columns: 1fr 2.5fr;
grid-template-rows: 86px;
height: 100%;
width: 100%;
padding:8px 16px ;
box-shadow: -4px 4px 15px 0px #00000033;
border-radius: ${theme.borderRadius.round};
background-color: #FFFFFF;

.pic {
    img {
        width: 100%;
        height: 100%;  
        object-fit: contain;
    }
}

.info{

    display: grid;
    grid-template-columns: 60% 40%;
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
    }
}

`;
