'use client'
import Link from "next/link";
import {useUserContext} from "../components/Context/UserContextProvider";

const linksNoUser =[{
  label : 'Inicio',
  route : '/'
},{
  label : 'Busqueda',
  route : '/search'
},{
  label : 'Combates',
  route : '/battle'
},{
  label : 'Cuenta',
  route : '/user'
}]
const linksUser =[{
  label : 'Inicio',
  route : '/'
},{
  label : 'Busqueda',
  route : '/search'
},{
  label : 'Combates',
  route : '/battle'
},{
  label : 'Cuenta',
  route : '/user'
},{
    label : 'Cerrar sesion',
    route : '/user/logout'
}]

export function Navigation ( ) {
  const {user} = useUserContext();
  return(
  <header>
    <nav className="nav">
      <ul className="navul">
        {
          user.logged
              ?
              linksUser.map(({label, route}) => (
                  <li key={route}>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
              ))
              :
              linksNoUser.map(({label, route}) => (
                  <li key={route}>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
              ))}
      </ul>
    </nav>
  </header>          
  )
}