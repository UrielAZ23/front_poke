'use client'
import Tabla from "../components/Table"
import React, {useState, useEffect} from 'react';
import axios from "axios";


const datos = [
  { campo1: 'Valor1', campo2: 'Valor2', campo3: 'Valor3', campo4: 'Valor4', campo5: 'Valor5', campo6: 'Valor6', campo7: 'Valor7' },
  // Agrega más filas según sea necesario
];



const url ='http://localhost:8081/autores';


export default function search ( ) {
    

    const [data, setData] = useState([]);

    let url ='http://localhost:8081/autores'; //poner aqui url de la api a usar
 
     const fechestate = () => {//nombre  sujeto a cambios
        fetch(url)
        .then(response=> response.json())
        .then(data=> mostrarData(data))
        .catch(error=> console.log(error))   

     }  

 const mostrarData = (data) => {
     console.log(data)
     let body = ''
     for (let i = 0; i<data.length; i++){
         body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].dato2}</td><td>${data[i].dato3}</td><td>${data[i].dato4}</td><td>${data[i].dato5}</td><td>${data[i].dato6}</td></tr>`
     }
    

     document.getElementById('data').innerHTML = body
    }

    
    return (
    <div>
        <h1>Seccion de estadisticas</h1>
        <p>Buscar Datos</p>  

        <h2>Tabla de estadisticas de las Batallas Pokemon</h2>
        
        <table>
         <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DATO1</th>
                <th>DATO2</th>
                <th>DATO3</th>
                <th>DATO4</th>
                <th>DATO5</th>
            </tr>
         </thead>
         <tbody id="data">
            
         </tbody>
        </table>

{/* <script>
 let url ='http://localhost:8081/autores';
 fetch(url)
     .then(response=> response.json())
     .then(data=> mostrarData(data))
     .catch(error=> console.log(error))

 const mostrarData = (data) => {
     console.log(data)
     let body = ''
     for (let i = 0; i<data.length; i++){
         body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].dato2}</td><td>${data[i].dato3}</td><td>${data[i].dato4}</td><td>${data[i].dato5}</td><td>${data[i].dato6}</td></tr>`
     }

     document.getElementById('data').innerHTML = body
 }
</script> */}
        
    </div>

    
    
       
    )
  }