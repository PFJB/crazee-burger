import styled from "styled-components";
import ButtonIcone from "../../../reusable-ui/button/ButtonIcone";
import { theme } from "../../../../theme/theme";
import { fakeMenu1 } from "../../../../assets/fakeData/fakeMenu";
import imgg from "./burger1.png";


export default function Card() {
  return (
    <CardStyled>
       <img className="img"  src={imgg} alt="burger" />
        <div className="title"><p>BURGER SAMERE</p></div>
        <div className="priceAdd">
            <p className="price">5,37 $</p>
            <ButtonIcone className="gr" label={"Ajouter"}/>
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
    border-radius: ${theme.borderRadius.extraRound} ${fakeMenu1.t};


    .img {
        width: 200px;
        height: 145px;
        margin-bottom: 15px;
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
        letter-spacing: 0em;
        color: ${theme.colors.primary};
        font-family: 'Open Sans', sans-serif;

    }

}

    .gr {
        margin: 0;
        width: 95px;
        height: 38px;
    }



`;
