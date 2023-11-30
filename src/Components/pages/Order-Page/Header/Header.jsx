import styled from 'styled-components';
import Logo from '../../../reusable-ui/logo/Logo'
import {useParams } from 'react-router-dom';
import NavRightSide from './NavRightSide';
import { theme } from '../../../../theme/theme';

export default function Header() {

  const {userName} = useParams();

  return (
    <OrderPagestyled>
        <a href={`/order/${userName}`}>
            <Logo  />
        </a>
        <NavRightSide />
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
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;


    a {

      text-decoration: none;
    }
`;

