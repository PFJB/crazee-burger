import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import styled from "styled-components"
import { theme } from "../../../theme/index";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "./TextInput";


export default function LogingForm() {

    // state
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    // comportements
    const handleClick = (event) => {
        event.preventDefault();
        navigate(`order/${input}`);
        setInput("");
    }

    const handleChange = (event) => {
        setInput(event.target.value);
        }

    const onBlur = (e) => {e.target.placeholder = "Entrez votre prénom"};
    const onFocus = (e) => {e.target.placeholder = ''};
    
    

    // affichage
    return (
    <LogingFormStyled action="submit" onSubmit={handleClick}>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        <TextInput
            value={input} 
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            onBlur={onBlur}
            onFocus={onFocus}
            IconeBeforeInput={<FaCircleUser />}
            required
        />
        <button>Accéder à mon espace <FaChevronRight/></button>

    </LogingFormStyled>
    )
}

const LogingFormStyled = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1, h2 {
        font-family: 'Amatic SC', sans-serif;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.bold};
    }

    h1 {
        font-size: ${theme.fonts.P5};
    }

    h2 {
        margin-top: 40px;
        font-size: ${theme.fonts.P4};
    }

    hr {
        background-color: ${theme.colors.primary_burger};
        height: 3px;
        width: 400px;
        border: none;
        margin-top: 32px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${theme.weights.bold};
        font-size: ${theme.fonts.P0};
        height: 53px;
        width: 400px;
        border: solid 1px ${theme.colors.primary_burger};
        border-radius: ${theme.borderRadius.round};
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary_burger};
        margin-top: 18px;
        gap: 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary_burger};
    }
`;
