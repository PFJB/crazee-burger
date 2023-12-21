import { FaCircleUser } from "react-icons/fa6";
import Profile from "./Profile";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";
import { theme } from "../../../../theme/theme";

export default function NavRightSide() {
  return (
    <NavRight>
      <ToastAdmin />
      <Profile />
      <FaCircleUser className='icone' />
    </NavRight>
  )
}

const NavRight = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .icone {
      font-size: 36px;
      margin-left: 10px;
      color: ${theme.colors.greyBlue};
    }
`
