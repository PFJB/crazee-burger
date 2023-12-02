import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Card from "../../../reusable-ui/card/Card";
import { fakeMenu2 } from "../../../../assets/fakeData/fakeMenu";
import { useState } from "react";


export default function Main() {

  const [menuData, setMenuData] = useState(fakeMenu2)

  return (
    <Mainstyled>
        {menuData.map(x => {
          return <Card key={x.id} title={x.title} price={x.price} imgSource={x.imageSource}/>
          })}
    </Mainstyled>
  )
}

const Mainstyled = styled.div`

    display: grid;
    justify-content: center;
    grid-template-columns:  repeat( auto-fit, 240px ) ;
    grid-template-rows: max-content;
    grid-row-gap: 60px;
    grid-column-gap: clamp(30px, 85px, 85px);
    flex: 1;
    background-color: white;
    box-shadow: 0px 8px 20px 8px #00000033 inset;
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    padding: 50px 92.5px;
    overflow: auto;

    &::-webkit-scrollbar {
  display: none;
}
`;
