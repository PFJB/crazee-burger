import styled from "styled-components";
import ButtonPanelAdmin from "../../../reusable-ui/button/ButtonPanelAdmin";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { tabConfigs } from "./tabsConfigs";

export default function ButtonArea() {

    const { tabSelected, isCollapse, SetIsCollapse, setTabSelected, SetcontentPanel } = useContext(OrderContext)
    const tabs = tabConfigs(tabSelected)

    const selectedTab = (tab, content) => {
        SetIsCollapse(true)
        setTabSelected(tab)
        SetcontentPanel(content)
    }

    return (
        <ButtonAreaStyled>
            <ButtonPanelAdmin
                label=""
                selected={!isCollapse}
                icone={isCollapse ? <GoChevronDown /> : <GoChevronUp />}
                handleClick={() => SetIsCollapse(!isCollapse)}
            />
            {tabs.map((tab) => (
                <ButtonPanelAdmin
                    key={tab.index}
                    label={tab.label}
                    icone={tab.icone}
                    selected={tab.index === tabSelected}
                    handleClick={() => selectedTab(tab.index, tab.content)}
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
`;