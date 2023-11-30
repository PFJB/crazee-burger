import styled from "styled-components";

export default function Card() {
  return (
    <CardStyled>
        <div className="img"></div>
        <div className="title">Burger poulet</div>
        <div className="priceAdd">
            div
        </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 330px;
    width: 240px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    padding: 50px 20px 10px 20px;
    .img {
        width: 200px;
        height: 145px;
        background-color: aliceblue;
        margin-bottom: 15px;
    }
.title {
        background-color: aqua;
        width: 200px;
        height: 46px;


}
.priceAdd {
    background-color: beige;
    width: 200px;
    height: 46px;

}



`;
