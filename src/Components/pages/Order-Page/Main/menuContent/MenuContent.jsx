import styled from 'styled-components';
import Card from '../../../../reusable-ui/card/Card';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { checkIfSelected } from './helpers.jsx'
import { EMPTY_PRODUCT } from '../../../../../enums/product.jsx';

export default function MenuContent() {
  const { menuData, handleCardDelete,
    setProductSelected, productSelected,
    IsAdminOn, SetIsCollapse, setTabSelected,
    titleEditRef, AddToBasket } = useContext(OrderContext)

  const handleClick = async (id) => {
    let selected = menuData.find((product) => product.id === id)
    selected = selected === productSelected ? EMPTY_PRODUCT : selected;
    await SetIsCollapse(true)
    await setTabSelected("mod")
    await setProductSelected(selected)
    if (titleEditRef.current !== null && titleEditRef.current !== undefined) { titleEditRef.current.focus() }
  }

  const handleDelete = (event, id) => {
    event.stopPropagation()
    handleCardDelete(id)
    id === productSelected.id ? setProductSelected(EMPTY_PRODUCT) : ""
    if (titleEditRef.current !== null && titleEditRef.current !== undefined) { titleEditRef.current.focus() }
  }

  const handleAddToCard = (event, idCardToAdd) => {
    event.stopPropagation()
    const selected = menuData.find((product) => product.id === idCardToAdd)

    AddToBasket(selected)
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
          handleAddToCard={(event) => handleAddToCard(event, id)}
        />
      })}
    </MenuContentStyled>
  )
}

const MenuContentStyled = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr) ;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr )) ;
    grid-template-rows: max-content;
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    overflow-y: scroll;
`;
