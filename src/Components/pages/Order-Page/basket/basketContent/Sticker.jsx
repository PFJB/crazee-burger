import styled from "styled-components"
import { theme } from "../../../../../theme/theme"

export default function Sticker({ label = "new", className }) {
  return <StickerStyled className={className}>{label}</StickerStyled>
}

const StickerStyled = styled.span`

position: absolute;
bottom: 0;
right: 0;

  font-size: ${theme.fonts.size.XXXS};
  padding: 1em;
  width: 31px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.redSecondary};
  border: none;
  color: white;
  text-transform: uppercase;
`
