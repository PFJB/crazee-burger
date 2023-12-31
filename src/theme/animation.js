import { css, keyframes } from "styled-components";
import { theme } from "./theme";

//---- Keyframes ----//

export const fadeInFromRigth = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
        opacity: 1;
    } 
`
export const fadeInFromBottom = keyframes`
  0%{
    transform: translateY(100%);
    opacity: 0;
  }
  100%{
    transform: translateY(0%);
    opacity: 1;
  }
`
export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
export const fadeInFromTop = keyframes`
    0% {
        transform: translateY(-50%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`
export const fadeInFromBottomRightScale = keyframes`
    0% {
        transform: translateY(40%) translateX(40%) scale(160%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%) translateY(0%) scale(100%);
        opacity: 1;
    }
`

//---- CSSTransition ----//

export const BasketProductsAnimation = css`

.animationBasket-appear {
    transform: translateX(100%);
    opacity: 0%;
    &.animationBasket-appear-active {
        transform: translateX(0%);
        opacity: 100%;
        transition: all ${theme.animationTime.fast};
    }
}

.animationBasket-enter {
    transform: translateX(100%);
    opacity: 0%;
    &.animationBasket-enter-active {
        transform: translateX(0%);
        opacity: 100%;
        transition: all ${theme.animationTime.fast};
    }
}

.animationBasket-exit {
    transform: translateX(0%);
    opacity: 100%;
    &.animationBasket-exit-active {
        opacity: 0%;
        transform: translateX(-100%);
        transition: all ${theme.animationTime.fast};
    }
}
`
export const cardAnimation = css`
   .cardAnimation-appear{
        opacity: 0%;
        &.cardAnimation-appear-active{
            opacity: 100%;
            transition: all ${theme.animationTime.fast};
        }
    }
    
    .cardAnimation-enter{
        opacity: 0%;
        &.cardAnimation-enter-active{
            opacity: 100%;
            transition: all ${theme.animationTime.fast};
        }
    }
    
    .cardAnimation-exit{
        opacity: 100%;
        &.cardAnimation-exit-active{
            opacity: 0%;
            transition: all ${theme.animationTime.fast};
        }
    } 
`
export const panelImagePreviewAnimation = css`
    .image-appear{
        opacity: 0;
        &.image-appear-active{
            opacity: 1;
            transition: all ${theme.animationTime.fast};
        }
    }
  
    .image-enter{
        opacity: 0;
        &.image-enter-active{
            opacity: 1;
            transition: all ${theme.animationTime.fast};
        }
    }
  
    .image-exit{
        display: none;
    }
`