import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import ImagePreview from "./ImagePreview"
import TextInput from "../../../../reusable-ui/textInput/TextInput"
import { GetTextInputConfigs } from "./inputTextConfigs"
import styled from "styled-components"
import { theme } from "../../../../../theme/theme"

export default function ModifyContent() {
  const { productSelected, setProductSelected, handleEdit } = useContext(OrderContext)
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
          <TextInput key={input.id} {...input} onChange={handleChange} version="panelAdmin"
          />))}
      </div>
    </EditContentStyled >

  )
}

const EditContentStyled = styled.form`
    display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  gap: 20px;

  .inputArea {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 8px;
    color: ${theme.colors.greyMedium};

    .buttonArea {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 15px;

      span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Open Sans', sans-serif;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.success};
      gap: 8px;
    }
    }
  }
`;

