import styled from 'styled-components';

export default function Basket() {
    return (

        <BasketStyled>
            <div className='headerPrice'></div>
            <div className='content'></div>
            <div className='footer'></div>
        </BasketStyled>


    )
}

const BasketStyled = styled.div`
display: flex;




background-color: aliceblue;

  
`;