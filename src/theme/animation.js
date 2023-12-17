import { css } from "styled-components";

export const panelAnimation = css`
  .panel-transition-appear{
    transform: translateY(100%);
    opacity: 0%;
    &.panel-transition-appear-active{
        transform: translateY(0%);
        opacity: 100%;
        transition: all 0.5s;
    }
  }
`
