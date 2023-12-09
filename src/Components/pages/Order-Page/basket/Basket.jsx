import styled from 'styled-components';
import { theme } from '../../../../theme/theme';
import HeaderBasket from './HeaderBasket';
import FooterBasket from './FooterBasket';

export default function Basket() {
    return (
        <BasketStyled>
            <HeaderBasket />
            <div className='content'><p>Votre commande est vide.</p></div>
            <FooterBasket />
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


  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;