import { Link } from "react-router-dom"

export default function ErrorPage() {
    //affichage
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={"/"}><button>Retourner a la page d&apos;acceuil</button></Link>
    </div>
  );
}