import { FaCircleUser, FaUserSecret } from "react-icons/fa6";
import Profile from "./Profile";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import { ToastContainer, toast } from "react-toastify"
import { theme } from "../../../../theme/theme";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function NavRightSide() {
  
 const [IsAdminOn , setIsAdminOn] = useState(false);

  const notify = () => {
  if (!IsAdminOn){
    toast.info("Mode admin activé", {
      icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  setIsAdminOn(IsAdminOn === false ? true : false)
}

  return (
    <NavRight>
      <div className="admin-button">
        <ToastContainer className="toaster" bodyClassName="body-toast" />
        <ToggleButton onToggle={notify} labelIfChecked="DÉSACTIVER LE MODE ADMIN" labelIfUnchecked="ACTIVER LE MODE ADMIN" />
      </div>
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

    .admin-button {
      width: fit-content;
      height: fit-content;
      margin-right: 60px;
    }


  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }


`
