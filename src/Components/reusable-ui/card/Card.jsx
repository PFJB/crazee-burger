import styled from "styled-components";
import ButtonIcone from "../button/ButtonIcone";
import { theme } from "../../../theme/theme";
import { formatPrice } from "../../../utils/maths";


export default function Card({price, imgSource, title}) {

  return (
    <CardStyled>
       <div className="picture"><img src={ imgSource } alt={ title } /></div>
        <div className="title"><p>{ title }</p></div>
        <div className="priceAdd">
            <p className="price">{ formatPrice(price) }</p>
            <ButtonIcone className="label" label={"Ajouter"}/>
        </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 330px;
    width: 240px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    padding: 50px 25px 30px 25px;
    border-radius: ${theme.borderRadius.extraRound};

    .picture {
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
        white-space: nowrap;
        overflow: hidden;
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
    .label {
        margin: 0;
        width: 95px;
        height: 38px;
        font-size: 11px;
        font-weight: 700;
        text-align: center;
    }
`;