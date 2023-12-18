import React from 'react';

const Tabla = ({ datos }) => {
  if (!datos || datos.length === 0) {
    return <p>No hay datos disponibles.</p>;
  }

  const headers = Object.keys(datos[0]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{fila[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;