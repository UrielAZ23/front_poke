import Link from "next/link";

export default function battle ( ) {
  return (
    <>
  <div>
    <h1>Seccion de combates</h1>
      <Link className="linkbotton" href={"/battle/starbattle"}>
                    Iniciar Batalla
      </Link>
  </div>
  </>
  )
}



/* idea del formato json a enviar
        {
          "idUsuario": 2342,
           id:35,
           name:"clefairy",
          "type": "grass",
          "move": "cut",
          "hp": 100
      }

*/