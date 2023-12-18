'use client'
import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext();
export const UserProvider = ({children}) => {
    const usuarioMaqueta = {
        user: '',
        logged: false
    }
    const [user, setUser] = useState(usuarioMaqueta);
    //Se manda a llamar la API de usuarios para el inicio de sesion
    const loginUser = async (user) => {
        //Modificar el cuerpo ¡¡¡Pendiente!!!
        //const response = await fetch('http://localhost:3000/api/user');
        //const data = await response.json();
        const data = {
            user: user,
            logged: true
        };
        //Agregar validacion de request, if response.ok? ejecuta: no guardar
        setUser(data);
        saveUserToLocalSotrage(data);
    }
    const saveUserToLocalSotrage = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    }
    const deleteUserFromLocalStorage = () => {
        localStorage.removeItem('user');
    }

    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : usuarioMaqueta;
    }
    const existUserInLocalStorage = () => {
        const user = localStorage.getItem('user');
        return user ? true : false;
    }
    const logoutUser = () => {
        setUser(usuarioMaqueta);
    }

    useEffect(() => {
        if(existUserInLocalStorage()){
            var user = getUserFromLocalStorage()
            setUser(user);
        }
    },[]);

    useEffect(() => {
        if(user.logged){
            saveUserToLocalSotrage(user);
        }else{
            deleteUserFromLocalStorage();
        }
    },[user]);

    return (
        <UserContext.Provider value={{user,loginUser,logoutUser}}>
            {children}
        </UserContext.Provider>
    )
};
export const useUserContext = () => {
    return useContext(UserContext);
};
