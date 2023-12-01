import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Card from "../../../reusable-ui/card/Card";
import { fakeMenu1, fakeMenu2 } from "../../../../assets/fakeData/fakeMenu";
import { useState } from "react";


export default function Main() {

  const [menuData, setMenuData] = useState(fakeMenu2)

  const menu = [];
  

  menuData.map(x => {
    menu.push(<Card key={x.id} title={x.title} price={x.price} img={x.imageSource}/>)
  })

  return (
    <Mainstyled>
        {menu}
    </Mainstyled>
  )
}

const Mainstyled = styled.div`

    display: grid;
    justify-content: center;
    grid-template-columns:  repeat( auto-fit, 240px ) ;
    grid-template-rows: max-content;
    grid-row-gap: 60px;
    grid-column-gap: clamp(40px, 85px, 100%);
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
