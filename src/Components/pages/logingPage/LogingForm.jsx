import { useState } from "react";

export default function LogingForm() {

    // state
    const [input, setInput] = useState("")

    // comportements
    const handleClick = (event) => {
        event.preventDefault();
        setInput("");
        alert(`Bonjour ${input}`)
    }

    const handleChange = (event) => {
    setInput(event.target.value)
    }

    // affichage
    return (
                <form action="submit" onSubmit={handleClick}>
                    <h1>Bienvenue chez nous !</h1>
                    <br />
                    <h2>Connectez vous ici</h2>
                    <input type="text" value={input} placeholder="Entrez votre prénom..."  onChange={handleChange}  required />
                    <button>Accédez a votre espace</button>
                </form>
    )
}
