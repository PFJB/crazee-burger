import styled from 'styled-components';
import Card from '../../../../reusable-ui/card/Card';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { checkIfSelected } from './helpers.jsx'

export default function MenuContent() {
  const { menuData, handleCardDelete, setProductSelected, productSelected, IsAdminOn } = useContext(OrderContext)

  const handleClick = (id) => {
    let selected = menuData.find((product) => product.id === id)
    selected = selected === productSelected ? {} : selected;

    setProductSelected(selected)
  }

  return (
    <MenuContentStyled>
      {menuData.map(({ id, title, price, imageSource }) => {
        return <Card
          key={id}
          title={title}
          price={price}
          imgSource={imageSource}
          handleDelete={() => handleCardDelete(id)}
          handleClick={() => handleClick(id)}
          isHoverable={IsAdminOn}
          isSelected={checkIfSelected(id, productSelected.id)}
        />
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
