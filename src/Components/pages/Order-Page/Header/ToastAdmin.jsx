import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import { theme } from "../../../../theme/theme";
import { FaUserSecret } from "react-icons/fa6";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function ToastAdmin() {

  const { IsAdminOn, setIsAdminOn } = useContext(OrderContext)

  const notify = () => {
    if (!IsAdminOn) {
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
    setIsAdminOn(!IsAdminOn ? true : false)
  }

  return (
    <ToastAdminStyled className="admin-button">
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <ToggleButton onToggle={notify}
        isChecked={IsAdminOn}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN" />
    </ToastAdminStyled>
  )
}

const ToastAdminStyled = styled.div`
    width: fit-content;
    height: fit-content;
    margin-right: 60px;

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
`;