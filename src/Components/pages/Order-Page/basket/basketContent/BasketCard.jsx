import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function BasketCard() {
    return (
        <BasketCardStyled>

            <div className="pic"><img src="http://localhost:5173/images/burger-bacon-egg.png" alt="" /></div>
            <div className="info">
                <div className="description">
                    <p className="title">burger</p>
                    <p className="price">00.00 $</p>
                </div>
                <p className="qte">x 5</p>
            </div>
        </BasketCardStyled>
    )
}

const BasketCardStyled = styled.div`

display: grid;
grid-template-columns: 1fr 2.5fr;
height: 86px;
width: 100%;
padding:8px 16px ;
box-shadow: -4px 4px 15px 0px #00000033;
border-radius: ${theme.borderRadius.round};
background-color: #FFFFFF;

.pic {
    display: flex;
    justify-content: center;
    align-items: center;

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
        }
    }

    .qte{
        display: flex;
        align-items: center;
        justify-content: center;

    }
}

`;
