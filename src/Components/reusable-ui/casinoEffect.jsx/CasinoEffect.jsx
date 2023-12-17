import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function CasinoEffect({ count, className }) {

  return (
    <TransitionGroup component={CasinoEffectStyled} className={"transition-group"}>
      <CSSTransition classNames={"price-animated"} timeout={500} key={count}>
        <span className={className}>
          {count}
        </span>
      </CSSTransition>
    </TransitionGroup>
  )
}

const CasinoEffectStyled = styled.div`
    position: relative;
    overflow-y: hidden;
  
  span{
    display: inline-block;
  }

  .price-animated-enter{
    transform: translateY(100%);
  }

  .price-animated-enter-active{
    transform: translateY(0%);    
    transition: all 0.5s;
  }

  .price-animated-exit{
    transform: translateY(0%);
    position :absolute;
    right: 0;
    bottom: 0;
  }

  .price-animated-exit-active{
    transform: translateY(-100%);
    transition: all 0.5s;
  }

`;
