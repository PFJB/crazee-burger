import styled from "styled-components";
import { theme } from "../../../../../theme/theme";
import ButtonIcone from "../../../../reusable-ui/button/ButtonIcone";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { fakeMenu2 } from "../../../../../assets/fakeData/fakeMenu";

export default function EmptyMenu() {

    const { resetMenu } = useContext(OrderContext);

    return (
        <EmptyMenuStyled>
            <h1>Le menu est vide ?</h1>
            <h2>Cliquez ci-dessous pour le réinitialiser</h2>
            <ButtonIcone
                onClick={() => { resetMenu(fakeMenu2) }}
                label={"Générer de nouveaux produits"}
                version={"normal"}
            />
        </EmptyMenuStyled>
    )
}

const EmptyMenuStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greyBlue};
    font-family: 'Amatic SC', sans-serif;

    h1{
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.bold};
        margin-bottom: 21px;
    }
    h2 {

        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        margin-bottom: 31px;
    }

    button {
        width: 224px;
        height: 50px;
        font-size: ${theme.fonts.size.XS};
    }
`;
