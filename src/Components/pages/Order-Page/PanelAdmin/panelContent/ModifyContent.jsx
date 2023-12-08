import { useContext, useRef } from "react"
import OrderContext from "../../../../../context/OrderContext"
import ImagePreview from "./ImagePreview"
import TextInput from "../../../../reusable-ui/textInput/TextInput"
import { GetTextInputConfigs } from "./inputTextConfigs"
import styled from "styled-components"
import { theme } from "../../../../../theme/theme"
import HintMessageEdit from "./HintMessageEdit"

export default function ModifyContent() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } = useContext(OrderContext)
  const textInputs = GetTextInputConfigs(productSelected)

  const handleChange = (event) => {
    const { name, value } = event.target
    const productOnChange = { ...productSelected, [name]: value }
    setProductSelected(productOnChange)
    handleEdit(productOnChange)
  }

  return (
    <EditContentStyled>
      <ImagePreview imageSource={productSelected.imageSource} />
      <div className="inputArea">
        {textInputs.map((input) => (
          <TextInput
            ref={input.name === "title" ? titleEditRef : null}
            key={input.id}
            {...input}
            onChange={handleChange}
            version="panelAdmin"
          />))}
        <HintMessageEdit />
      </div>

    </EditContentStyled >
  )
}

const EditContentStyled = styled.form`
  display: flex;
  position: relative;
  height: 100%;
  max-width: 80%;
  gap: 20px;

  .inputArea {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 8px;
    color: ${theme.colors.greyMedium};
  }
`;

