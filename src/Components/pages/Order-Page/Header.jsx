import styled from 'styled-components';
import Logo from '../../reusable-ui/logo/Logo'
import LogingOrderPage from './LogingOrderPage'
import { FaCircleUser } from "react-icons/fa6";

export default function Header() {


  return (
    <OrderPagestyled>
        <LogoStyled>
            <Logo/>
        </LogoStyled>
            <NavRightUserStyled>
                <LogingOrderPage />
                <FaCircleUser className='icone'/>
            </NavRightUserStyled>
    </OrderPagestyled>
  )
}

const OrderPagestyled = styled.div`

    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100px;
    padding: 0px 70px 0px 20px;
    box-shadow: 0;
 

`;

const LogoStyled = styled.div`
    display: none;
   
`;

const NavRightUserStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 100%;
    background-color: beige;

    .icone {
        aspect-ratio: 1/1;
        height: 36px;
        width: auto;
        margin-left: 10px;
    }
`

