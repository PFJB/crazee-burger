import { Link, useParams } from "react-router-dom";

export default function LogingOrderPage() {
    //state
    const {input} = useParams()

    //Comportements

    //affichage
  return (
    <div>
        <p>Bonjour {input}</p>
        <Link to={"/"}><button>Déconnexion</button></Link>
    </div>
  )
}
