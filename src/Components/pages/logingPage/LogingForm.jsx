import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "../../reusable-ui/textInput/TextInput";
import ButtonIcone from "../../reusable-ui/button/ButtonIcone";
import { addUser, getUsers } from "../../../api/user";

export default function LogingForm() {

    // state
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    // comportements
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const test = getUsers(input).then((x) => { return (x) })
        // const isUsers = async () => {
        //     const i = await test;
        //     if (i === -1) {
        //         addUser(input)
        //     }
        // }
        // await isUsers()
        navigate(`order/${input}`);
        setInput("");
    }
    const handleChange = (event) => { setInput(event.target.value); }

    const onBlur = (e) => { e.target.placeholder = "Entrez votre prénom" };
    const onFocus = (e) => { e.target.placeholder = '' };

    // affichage
    return (
        <LogingFormStyled action="submit" onSubmit={handleSubmit}>
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
                version={"normal"}
            />

        </LogingFormStyled>
    )
}

const LogingFormStyled = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;

    h1, h2 {
        font-family: 'Amatic SC', sans-serif;
        color: ${theme.colors.white};
        font-weight: ${theme.fonts.weights.bold};
    }

    h1 {
        font-size: ${theme.fonts.size.P5};
    }

    h2 {
        font-size: ${theme.fonts.size.P4};
    }

    hr {
        background-color: ${theme.colors.hr};
        height: 3px;
        width: 100%;
        border: none;
    }
`;
