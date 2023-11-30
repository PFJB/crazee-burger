import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function Main() {
  return (
    <Mainstyled>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>

    </Mainstyled>
  )
}

const Mainstyled = styled.div`

    display: grid;
    grid-template-columns: repeat(5 , 240px);
    grid-template-rows: 1fr 1fr 1fr ;
    grid-row-gap: 60px;
    grid-column-gap: 5%;
    flex: 1;
    background-color: white;
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    padding: 50px 50px 150px;

    .test{
        width: 240px;
        height: 330px;
        background-color: aliceblue;
    }
`;
