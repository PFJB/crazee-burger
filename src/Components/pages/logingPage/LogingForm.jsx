import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "../../reusable-ui/textInput/TextInput";
import ButtonIcone from "../../reusable-ui/button/ButtonIcone";

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

    const onBlur = (e) => { e.target.placeholder = "Entrez votre prénom" };
    const onFocus = (e) => { e.target.placeholder = '' };

    // affichage
    return (
        <LogingFormStyled action="submit" onSubmit={handleClick}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <TextInput
                value={input}
                IconeBeforeInput={<FaCircleUser />}
                onChange={handleChange}
                placeholder="Entrez votre prénom"
                onBlur={onBlur}
                onFocus={onFocus}
                version={"normal"}
                required
            />
            <ButtonIcone
                label="Accéder à mon espace"
                iconeButton={<FaChevronRight />}
            />

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
        font-weight: ${theme.fonts.weights.bold};
    }

    h1 {
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        margin-top: ${theme.gridUnit * 5}px;
        font-size: ${theme.fonts.size.P4};
    }

    hr {
        background-color: ${theme.colors.hr};
        height: 3px;
        width: 100%;
        border: none;
        margin-top: ${theme.spacing.lg};
    }
`;
