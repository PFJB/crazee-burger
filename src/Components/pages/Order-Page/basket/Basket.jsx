import styled from 'styled-components';
import { theme } from '../../../../theme/theme';

export default function Basket() {
    return (

        <BasketStyled>
            <div className='headerPrice'></div>
            <div className='content'><p>Votre commande est vide.</p></div>
            <div className='footer'></div>
        </BasketStyled>


    )
}

const BasketStyled = styled.div`
display: flex;
flex-direction: column;
position: relative;
width: 350px;
height: 100%;
overflow: hidden;


height: calc(95vh - 13vh);
border-bottom-left-radius: ${theme.borderRadius.extraRound};

background-color: ${theme.colors.background_white};
box-shadow: 0px 0px 20px 0px #00000033 inset;

  .headerPrice{
    height: 70px;
    width: 100%;
    background-color: black;
  }
  
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    

  }
  .footer{
    position: relative;
    bottom: 0;
    height: 70px;
    width: 100%;
    background-color: black;
    }
`;