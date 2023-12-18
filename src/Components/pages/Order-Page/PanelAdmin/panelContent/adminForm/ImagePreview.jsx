import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { panelImagePreviewAnimation } from "../../../../../../theme/animation";

export default function ImagePreview({ imageSource }) {
    return (
        <TransitionGroup component={ImagePreviewStyled}>
            <CSSTransition classNames={"image"} appear={true} key={imageSource} timeout={{ enter: 500 }}>
                <div className="imageArea">
                    {imageSource ? <img className="img" src={imageSource} alt="Added picture" /> : "Aucune image"}
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

const ImagePreviewStyled = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 1 / 1 / 4 / 2;
    border: solid 1px ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    width: 160px;
    height: 120px;
    font-size: ${theme.fonts.size.P0};
    font-weight: ${theme.fonts.weights.regular};
    font-family: 'Open Sans', sans-serif;
    color: ${theme.colors.greyMedium};

    .imageArea{
        height: 100%;
        width: 100%;
        
        .img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
  
    ${panelImagePreviewAnimation}
`;