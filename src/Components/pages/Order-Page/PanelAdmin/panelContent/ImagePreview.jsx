import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export default function ImagePreview({ imageSource }) {
    return (
        <ImagePreviewStyled className="image">
            {imageSource ? <img src={imageSource} alt="Added picture" /> : "Aucune image"}
        </ImagePreviewStyled>
    )
}

const ImagePreviewStyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    width: 215px;
    height: 120px;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    font-family: 'Open Sans', sans-serif;
    color: ${theme.colors.greyMedium};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  
`;