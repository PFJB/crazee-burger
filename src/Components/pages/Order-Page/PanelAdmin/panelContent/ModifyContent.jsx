import { useContext, useState } from "react"
import OrderContext from "../../../../../context/OrderContext"
import ImagePreview from "./ImagePreview"
import TextInput from "../../../../reusable-ui/textInput/TextInput"
import { GetTextInputConfigs } from "./inputTextConfigs"
import styled from "styled-components"
import { EMPTY_PRODUCT } from "../../../../../enums/product"

export default function ModifyContent() {

  const { setProductSelected, productSelected } = useContext(OrderContext)
  const textInputs = GetTextInputConfigs(productSelected)
  const [productBeingEdited, setproductBeingEdited] = useState(EMPTY_PRODUCT)

  const handleChange = (event) => {
    setproductBeingEdited({ ...productBeingEdited, [event.target.name]: event.target.values })
    console.log(productBeingEdited)
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
  
`;

