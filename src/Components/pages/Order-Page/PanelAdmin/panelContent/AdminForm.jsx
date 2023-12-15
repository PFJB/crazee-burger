import styled from "styled-components";
import TextInput from "../../../../reusable-ui/textInput/TextInput";
import { theme } from "../../../../../theme/theme";
import ImagePreview from "./ImagePreview";
import { GetTextInputConfigs } from "./inputTextConfigs";
import React from "react";

const AdminForm = React.forwardRef(({ onSubmit, onChange, product, children, onFocus, onBlur }, ref) => {

  const textInputs = GetTextInputConfigs(product)

  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} />
      <div className="inputArea">
        {textInputs.map((input) => (
          <TextInput
            ref={ref && input.name === "title" ? ref : null}
            key={input.id}
            {...input}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            version="panelAdmin"
          />))}
        {children}
      </div>
    </AdminFormStyled >
  )
})

AdminForm.displayName = "AdminForm"
export default AdminForm

const AdminFormStyled = styled.form`

  display: flex;
  position: relative;
  height: 100%;
  width: 80%;
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