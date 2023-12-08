import styled from 'styled-components';
import Card from '../../../../reusable-ui/card/Card';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { checkIfSelected } from './helpers.jsx'

export default function MenuContent() {
  const { menuData, handleCardDelete, setProductSelected, productSelected, IsAdminOn, SetIsCollapse, setTabSelected, titleEditRef } = useContext(OrderContext)

  const handleClick = async (id) => {
    let selected = menuData.find((product) => product.id === id)
    selected = selected === productSelected ? {} : selected;
    await SetIsCollapse(true)
    await setTabSelected("mod")
    await setProductSelected(selected)
    titleEditRef.current.focus()
  }

  const handleDelete = (event, id) => {
    event.stopPropagation()
    handleCardDelete(id)
  }

  return (
    <MenuContentStyled>
      {menuData.map(({ id, title, price, imageSource }) => {
        return <Card
          key={id}
          title={title}
          price={price}
          imgSource={imageSource}
          handleDelete={(event) => { handleDelete(event, id) }}
          handleClick={() => IsAdminOn && handleClick(id)}
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
