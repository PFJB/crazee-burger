import styled from 'styled-components';
import Logo from '../../reusable-ui/logo/Logo'
import LogingOrderPage from './LogingOrderPage'
import { FaCircleUser } from "react-icons/fa6";

export default function Header() {

  return (
    <OrderPagestyled>
            <a href="/"><Logo/></a>
            <NavRightUserStyled>
                <LogingOrderPage />
                <FaCircleUser className='icone'/>
            </NavRightUserStyled>
    </OrderPagestyled>
  )
}

const OrderPagestyled = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0px 70px 0px 20px;

    a {
  text-decoration: none;
 }
`;

const NavRightUserStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .icone {
        aspect-ratio: 1/1;
        height: 36px;
        width: auto;
        margin-left: 10px;
        color: #747B91;
    }
`

