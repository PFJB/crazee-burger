import styled from "styled-components";
import ButtonPanelAdmin from "../../../reusable-ui/button/ButtonPanelAdmin";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { theme } from "../../../../theme/theme";




export default function ButtonArea({isCollapse, setIsCollapse}) {

  

  return (
    <ButtonAreaStyled>
        <ButtonPanelAdmin className={!isCollapse ? "is-active" : ""} icone={isCollapse ? <GoChevronDown /> : <GoChevronUp />} handleClick={ () => setIsCollapse(!isCollapse)} />
    </ButtonAreaStyled>
  )
}

const ButtonAreaStyled = styled.div`
          display: flex;
        flex-direction: row;
        padding-left: 71px;
        height: 43px;
        width: fit-content;
        max-width: 100%;

        .is-active {
            background-color: ${theme.colors.background_dark};
            color: ${theme.colors.white};
            border-color: ${theme.colors.background_dark};
        }
`;