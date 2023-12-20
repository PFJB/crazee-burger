import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/textInput/TextInput";
import ImagePreview from "./ImagePreview";
import { GetSelectConfigs, GetTextInputConfigs } from "./inputTextConfigs.jsx";
import React from "react";
import Select from "./Select.jsx";


const AdminForm = React.forwardRef(({ onSubmit, onChange, product, children, onFocus, onBlur, handleSelectedChoice }, ref) => {

  const textInputs = GetTextInputConfigs(product)
  const select = GetSelectConfigs(product)

  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ImagePreview className={"imagePreview"} imageSource={product.imageSource} title={product.title} />
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
        {select.map((input) => {
          return <Select
            key={input.id}
            IconeBeforeInput={input.icone}
            option={input}
            id={input.id}
            onChange={handleSelectedChoice}
          />
        })}
      </div>
      <div className="form-footer">{children}</div>
    </AdminFormStyled >
  )
})

AdminForm.displayName = "AdminForm"
export default AdminForm

const AdminFormStyled = styled.form`
  width: clamp(5%, 100%, 660px);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-row-gap: 8px;
  grid-column-gap: 20px;

  .inputArea{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 8px;
    grid-area: 1/2/-2/3;

    .grand{
      grid-column:  span 3;
    }
  }

  .form-footer{
    display: grid;
    align-items: center;
    grid-area: 4 / -2 / -1 / -1;
  }

`;