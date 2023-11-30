import styled from 'styled-components';
import Logo from '../../reusable-ui/logo/Logo'
import LogingOrderPage from './LogingOrderPage'
import { FaCircleUser } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';

export default function Header() {

    const {userName} = useParams();

  return (
    <OrderPagestyled>
            <a href={`/order/${userName}`}>
              <Logo  />
            </a>
            <NavRight>
                <LogingOrderPage />
                <FaCircleUser className='icone'/>
            </NavRight>
    </OrderPagestyled>
  )
}

const OrderPagestyled = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0px 70px 0px 20px;
    background-color: white;

    a {

      text-decoration: none;
 }

 
`;

const NavRight = styled.div`

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

