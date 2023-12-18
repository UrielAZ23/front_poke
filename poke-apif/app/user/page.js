'use client'
import {useUserContext} from "../components/Context/UserContextProvider";
import {useState} from "react";
import Link from "next/link"

export default function cuenta( ) {

    const {user,loginUser,logoutUser} = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            {!user.logged?
            <>
            <h1>Bienvenido a PokeApiBattle</h1>
            <h2>Necesitas una cuenta para iniciar</h2>
            </>
            :
            <h1>Bienvenido de vuelta {user.nombre}</h1>}
            

            {user.logged?
                <button>Salir</button>
                :
                <>
                 <Link className="linkbotton" href={"/user/login"}>
                    Iniciar sesion
                </Link>
                <Link className="linkbotton" href={"/user/newuser"}>
                    Crear cuenta
                </Link>
                <Link className="linkbotton" href={"/user/findpassword"}>
                    Recuperar contraseña
                </Link>
                </>
            }
        </>
    )
  }