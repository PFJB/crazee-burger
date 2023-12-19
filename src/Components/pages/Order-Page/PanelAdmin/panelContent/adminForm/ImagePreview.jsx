import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { panelImagePreviewAnimation } from "../../../../../../theme/animation";

export default function ImagePreview({ imageSource, title = "Added picture" }) {
    return (
        <TransitionGroup component={ImagePreviewStyled}>
            <CSSTransition classNames={"image"} appear={true} key={imageSource} timeout={{ enter: 500 }}>
                {imageSource ?
                    <img className="img" src={imageSource} alt={title} />
                    :
                    <p className="aucuneImage">Aucune image</p>}
            </CSSTransition>
        </TransitionGroup>
    )
}

const ImagePreviewStyled = styled.div`

    grid-area: 1 / 1 / 4 / 2;

    & > *, &, img{
        width: 100%;
        height: 100%;
    }

    .aucuneImage{
        display: grid;
        place-content: center;
        border: solid 1px ${theme.colors.greyLight};
        border-radius: ${theme.borderRadius.round};
        font-size: ${theme.fonts.size.P0};
        font-weight: ${theme.fonts.weights.regular};
        font-family: 'Open Sans', sans-serif;
        color: ${theme.colors.greyMedium};
    }

    .img{
        object-fit: contain; 
    }
  
    ${panelImagePreviewAnimation}
`;