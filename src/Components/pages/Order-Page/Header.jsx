import Logo from '../../reusable-ui/logo/Logo'
import LogingOrderPage from './LogingOrderPage'
import { FaCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <div>
        <Logo />
        <div>
            <div>
                <LogingOrderPage />
                <FaCircleUser/>
            </div>
        </div>
    </div>
  )
}
