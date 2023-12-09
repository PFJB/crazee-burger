import styled from "styled-components";

export default function BasketContent() {
    return (
        <BasketContentStyled>
            Votre commande est vide.
        </BasketContentStyled>
    )
}

const BasketContentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  
`;