import styled from "styled-components";
import ButtonPanelAdmin from "../../../reusable-ui/button/ButtonPanelAdmin";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { theme } from "../../../../theme/theme";
import { useContext } from "react";
import { getTabConfigs } from "./tabsConfigs";
import OrderContext from "../../../../context/OrderContext";

export default function ButtonArea() {

    const {tabSelected, isCollapse, SetIsCollapse , setTabSelected} = useContext(OrderContext)
    const tabs = getTabConfigs(tabSelected)

    const selectedTab = (tab) => {
        SetIsCollapse(true)
        setTabSelected(tab)
    }

  return (
    <ButtonAreaStyled>
        <ButtonPanelAdmin 
            label=""
            className={!isCollapse ? "is-active" : ""}
            icone={isCollapse ? <GoChevronDown /> : <GoChevronUp />}
            handleClick={ () => SetIsCollapse(!isCollapse)}
        />
        {tabs.map((tab) => (
            <ButtonPanelAdmin
                label={tab.label}
                icone={tab.icone}
                className={tab.className}
                handleClick={() => selectedTab(tab.index)}
            />
        )
        )}
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
        gap: 1px;

        .is-active {
            background-color: ${theme.colors.background_dark};
            color: ${theme.colors.white};
            border-color: ${theme.colors.background_dark};
        }
`;