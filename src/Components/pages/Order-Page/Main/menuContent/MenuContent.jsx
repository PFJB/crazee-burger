import styled from 'styled-components';
import Card from '../../../../reusable-ui/card/Card';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';

export default function MenuContent() {
  const { menuData, handleCardDelete } = useContext(OrderContext)

  return (
    <MenuContentStyled>
      {menuData.map(({ id, title, price, imageSource }) => {
        return <Card key={id}
          title={title}
          price={price}
          imgSource={imageSource}
          onClick={() => handleCardDelete(id)} />
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
