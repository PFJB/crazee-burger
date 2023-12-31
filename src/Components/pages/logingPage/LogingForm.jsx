import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import { FaChevronRight } from "react-icons/fa";
import TextInput from "../../reusable-ui/textInput/TextInput";
import ButtonIcone from "../../reusable-ui/button/ButtonIcone";
import { authenticateUsers } from "../../../api/user";

export default function LogingForm() {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await authenticateUsers(username)
        navigate(`order/${username}`);
        setUsername("");
    }

    const handleChange = (event) => { setUsername(event.target.value); }
    const onBlur = (e) => { e.target.placeholder = "Entrez votre prénom" };
    const onFocus = (e) => { e.target.placeholder = '' };

    return (
        <LogingFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <TextInput
                value={username}
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
        margin-top: 22px;
        font-size: ${theme.fonts.size.P4};
    }

    hr {
        margin-top: 0.875em;
        background-color: ${theme.colors.hr};
        height: 3px;
        width: 100%;
        border: none;
    }
`;
