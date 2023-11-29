import styled from "styled-components";
import { theme } from "../../../theme/index";




export default function TextInput({value, onChange, IconeBeforeInput, ...others}) {

  return (
    <InputStyled>
        {IconeBeforeInput && IconeBeforeInput}
        <input 
            value={value} 
            onChange={onChange}
            type="text" 
            {...others}
        />
    </InputStyled>
  )
}

const InputStyled = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 53px;
        width: 400px;
        padding: 18px 24px 18px 24px;
        border: none;
        border-radius: ${theme.borderRadius.round};
        background-color: ${theme.colors.white};
        margin-top: 18px;
        color: ${theme.colors.greySemiDark};

        input{
            width: 90%;
            border: none;
            border-radius: ${theme.borderRadius.round};
            background-color: ${theme.colors.white};
            outline-style: none;
        }

        input::placeholder {
            color:  #D3D3D3;
            font-size: ${theme.fonts.P0};
        }
    
`;

