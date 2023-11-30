import { FaCircleUser } from "react-icons/fa6";
import LogingOrderPage from "../LogingOrderPage";
import styled from "styled-components";

export default function NavRightSide() {
  return (
    <NavRight>
        <LogingOrderPage />
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
