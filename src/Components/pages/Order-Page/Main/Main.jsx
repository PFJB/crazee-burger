import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Card from "./Card";

export default function Main() {
  return (
    <Mainstyled>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

    </Mainstyled>
  )
}

const Mainstyled = styled.div`

    display: grid;
    justify-content: center;
    grid-template-columns:  repeat( auto-fit, 240px ) ;
    grid-template-rows: max-content;
    grid-row-gap: 60px;
    grid-column-gap: clamp(85px, 85px, 5vw);
    flex: 1;
    background-color: white;
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    padding: 50px 92.5px;
    overflow-x: scroll;

    .test{
        width: 240px;
        height: 330px;
        background-color: aliceblue;
    }
`;
