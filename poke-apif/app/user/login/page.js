'use client'
import {useUserContext} from "../../components/Context/UserContextProvider";
//import {useState} from "react";
//nuevos imports
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import commonStyles from '../common-styles.module.css';


const login = () => {
    // Estados locales para el nombre de usuario y la contraseña
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    // Se obtiene el objeto router para redirigir después del inicio de sesión
    //const router = useRouter();
  
    // Función para manejar el inicio de sesión
    const handleLogin = async () => {
      try {
        // Realiza la petición a la API para iniciar sesión
        const response = await fetch('http://localhost:8080/api/user/encoded', {
          method: 'POST',  
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        // Si la petición es exitosa, redirige a la página principal
        if (response.ok) {
            loginUser(username);
            router.push('/');
          
        } else {
          // Manejamos casos de error aquí, mostramos mensaje de error, etc.
          console.error('Error en la petición:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Muestra un mensaje de error al usuario
      }
    };

    const {user,loginUser,logoutUser} = useUserContext();

    //const [password, setPassword] = useState('');
    return (
        <>
        <div className={`${commonStyles.backgroundContainer} ${commonStyles.pageContainer}`}>
            {!user.logged?
            <h1></h1>:
            <h1>Bienvenido {user.user}</h1>}           
            {user.logged?
                <button onClick={()=>logoutUser()}>Salir</button>
                :
                <>    
                
                <div className={commonStyles.container}>
                    <h2 className={commonStyles.customHeader}>Inicio de Sesion</h2>
                    {/* Cajas de entrada para el nombre de usuario y la contraseña */}
                    <input
                      type="text"
                      placeholder="Usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={commonStyles.inputField}
                    />
                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={commonStyles.inputField}
                    />
                    {/* Botón para realizar el inicio de sesión */}
                    <button className={commonStyles.customButton} onClick={handleLogin}>
                        Iniciar Sesion
                    </button>
            
                    {/* Enlace para recuperar contraseña */}
                    <p className={commonStyles.forget}>
                      ¿Olvidaste la contraseña?{' '}
                      <Link href="/user/findpassword">Recupérala</Link>
                    </p>
            
                    {/* Enlace para redirigir al usuario a la página de registro */}
                    <p className={commonStyles.forget}>
                      ¿No tienes una cuenta?{' '}
                      <Link href="/user/newuser">Regístrate</Link>
                    </p>
                  </div>
                  
                
                </>
                
            }
            </div>
        </>
    )
  };

  export default login;