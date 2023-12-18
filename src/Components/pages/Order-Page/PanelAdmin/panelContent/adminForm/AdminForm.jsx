import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/textInput/TextInput";
import ImagePreview from "./ImagePreview";
import { GetTextInputConfigs } from "./inputTextConfigs.jsx";
import React from "react";
import Select from "./Select.jsx";
import { FiPackage } from "react-icons/fi";


const AdminForm = React.forwardRef(({ onSubmit, onChange, product, children, onFocus, onBlur }, ref) => {

  const textInputs = GetTextInputConfigs(product)

  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ImagePreview className={"imagePreview"} imageSource={product.imageSource} />
      <div className="inputArea">
        {textInputs.map((input) => (
          <TextInput
            className={input.name === "title" || input.name === "imageSource" ? "grand" : ""}
            ref={ref && input.name === "title" ? ref : null}
            key={input.id}
            {...input}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            version="panelAdmin"
          />))}
        <Select IconeBeforeInput={<FiPackage />
        } />
      </div>
      <div className="form-footer">{children}</div>
    </AdminFormStyled >
  )
})

AdminForm.displayName = "AdminForm"
export default AdminForm

const AdminFormStyled = styled.form`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-row-gap: 8px;
  grid-column-gap: 20px;

  .inputArea{
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-area: 1/2/-2/3;

    .grand{
      grid-column: 1 / span 3;
    }
  }

  .form-footer{
    grid-area: 4 / -2 / -1 / -1;
  }

`;