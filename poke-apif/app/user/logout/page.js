'use client'
import {useUserContext} from "../../components/Context/UserContextProvider";
import {useState} from "react";
import Link from "next/link"



export default function login ( ) {
    const {user,loginUser,logoutUser} = useUserContext();

    return (
        <>
            <h2>¿Seguro que desaas salir?</h2>

            <Link onClick={()=>logoutUser()} className="linkbotton" href={"/"}>
                    Salir
            </Link>

               

            
        </>
    )
  }