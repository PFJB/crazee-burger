import { FaCircleUser } from "react-icons/fa6";
import Profile from "./Profile";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";

export default function NavRightSide() {
  return (
    <NavRight>
        <ToastAdmin />
        <Profile />
        <FaCircleUser className='icone'/>
    </NavRight>
  )
}

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
