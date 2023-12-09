import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import BasketContentEmpty from "./BasketContentEmpty";

export default function BasketContent() {
    return (
        <BasketContentStyled>
            <BasketContentEmpty />
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;  
`;