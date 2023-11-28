import { Link, useParams } from "react-router-dom";

export default function LogingOrderPage() {
    //state
    const {userName} = useParams();

    //Comportements

    //affichage
  return (
    <div>
        <p>Bonjour {userName}</p>
        <Link to={"/"}><button>Déconnexion</button></Link>
    </div>
  )
}
