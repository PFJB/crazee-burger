import styled from 'styled-components';
import Logo from '../../../reusable-ui/logo/Logo'
import NavRightSide from './NavRightSide';
import { theme } from '../../../../theme/theme';
import { refreshPage } from '../../../../utils/window';

export default function Header() {

  return (
    <OrderPagestyled>
      <Logo onClick={refreshPage} />
      <NavRightSide />
    </OrderPagestyled>
  )
}

const OrderPagestyled = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 100px;
    padding: 0px 70px 0px 20px;
    background-color: white;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
`;

