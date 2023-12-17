import { BsCloudCheck } from "react-icons/bs";

import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";

export default function SavingMessage() {
    return (
        <SavingMessageStyled>
            <div className="icone"><BsCloudCheck /></div>
            <span>Modifications enregistrées !</span>
        </SavingMessageStyled>
    )
}

const SavingMessageStyled = styled.div`
    display: flex;
    gap: 0.625em;
    color: ${theme.colors.blue};
    font-family: 'Open Sans', sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P0};

    .icone{
        display: flex;
        align-items: center;
        font-size: 1.125em;
        font-size: ${theme.fonts.size.P1};
    }
`;