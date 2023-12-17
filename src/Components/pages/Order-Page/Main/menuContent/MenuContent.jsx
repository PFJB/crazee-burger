import styled from 'styled-components';
import Card from '../../../../reusable-ui/card/Card';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import { checkIfSelected } from './helpers.jsx'
import { EMPTY_PRODUCT } from '../../../../../enums/product.jsx';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { cardAnimation } from '../../../../../theme/animation.js';

export default function MenuContent() {
  const { menuData, handleCardDelete,
    setProductSelected, productSelected,
    IsAdminOn, SetIsCollapse, setTabSelected,
    titleEditRef, addToBasket, deleteToBasket, userName } = useContext(OrderContext)

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
    deleteToBasket(id, userName)
    id === productSelected.id ? setProductSelected(EMPTY_PRODUCT) : ""
    if (titleEditRef.current !== null && titleEditRef.current !== undefined) { titleEditRef.current.focus() }
  }

  async function handleAddToBasket(event, idCardToAdd) {
    event.stopPropagation()
    const selected = menuData.find((product) => product.id === idCardToAdd)
    addToBasket(selected.id, userName)
  }

  return (
    <TransitionGroup component={MenuContentStyled}>
      {menuData.map(({ id, title, price, imageSource }) => {
        return (
          <CSSTransition key={id} classNames={"cardAnimation"} appear timeout={500}>
            <Card
              key={id}
              title={title}
              price={price}
              imgSource={imageSource}
              handleDelete={(event) => { handleDelete(event, id) }}
              handleClick={() => IsAdminOn && handleClick(id)}
              isHoverable={IsAdminOn}
              isSelected={checkIfSelected(id, productSelected.id)}
              handleAddToCard={(event) => handleAddToBasket(event, id)}
            />
          </CSSTransition>)
      })}
    </TransitionGroup>
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

  ${cardAnimation}
`;
