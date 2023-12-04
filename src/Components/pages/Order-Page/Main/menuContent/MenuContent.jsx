import styled from 'styled-components';
import Card from '../../../../reusable-ui/card/Card';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function MenuContent() {
    const {setMenuData, menuData} = useContext(OrderContext)

    const onClick = (cardId) => {
        let newMenu = [...menuData];
        for (let i = 0; i < newMenu.length; i++){
          if (cardId === newMenu[i].id){
            newMenu.splice(i, 1)
          }
        }
        setMenuData(newMenu)
      }

  return (
    <MenuContentStyled>
        {menuData.map(x => {
            return <Card key={x.id}
                title={x.title}
                price={x.price}
                imgSource={x.imageSource}
                onClick={() => onClick(x.id)}/>
  })}
</MenuContentStyled>
  )
}

const MenuContentStyled = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr) ;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr )) ;
    grid-template-rows: max-content;
    grid-row-gap: 60px;
    padding: 50px 92.5px;
`;
