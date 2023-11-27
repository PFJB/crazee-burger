import { useState } from "react";

export default function Form() {

    const [input, setInput] = useState("")

    const handleClick = (event) => {
        event.preventDefault();
        setInput("");
        input === "" ? console.error('champ obligatoire') : alert(`Bonjour, ${input}`)
    }

    const handleChange = (event) => {
    setInput(event.target.value)
    }

    return (
        <div>
            <h1>Bienvenue chez nous</h1>
            <h2>Connectez vous ici</h2>
                <form action="submit">
                    <input type="text" value={input} placeholder="Entrez votre prénom..." onChange={handleChange} required />
                    <button onClick={handleClick}>Accédez a votre espace</button>
                </form>
        </div>
    )
}
