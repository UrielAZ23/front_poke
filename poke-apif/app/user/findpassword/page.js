'use client'
import {useUserContext} from "../../components/Context/UserContextProvider";
import {useState} from "react";
import Link from "next/link"



// Importa React y los estilos de CSS Modules
import commonStyles from '../common-styles.module.css';

// Define el componente de recuperación de contraseña
const finduser = () => {
  // Estado para almacenar el correo electrónico
  const [email, setEmail] = useState('');

  // Función para manejar la recuperación de contraseña
  const handleRecovery = async () => {
    try {

      if (!email) {
        console.error('Ingrese un correo electrónico');
        return;
      }

      // Envía la solicitud de recuperación de contraseña usando fetch
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Verifica el estado de la respuesta
      if (response.ok) {
        console.log('Recuperación de contraseña iniciada');
      } else {
        console.error('Error en la recuperación de contraseña:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la recuperación de contraseña:', error);
    }
  };

  return (
    // Contenedor principal con estilos del módulo CSS
    <div className={`${commonStyles.backgroundContainer} ${commonStyles.pageContainer}`}>
      <div className={commonStyles.container}>
        <h2 className={commonStyles.customHeader}>Recuperar Contraseña</h2>
        {/* Formulario con estilos del módulo CSS */}
        <form>
          {/* Caja de entrada para el correo electrónico con estilos del módulo CSS */}
          <div className={commonStyles.inputField}>
            <input
              type="text"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Caja de entrada para el botón de enviar con estilos del módulo CSS */}
          <div className={commonStyles.inputField}>
            <input
              type="button"
              value="Enviar"
              className={`${commonStyles.customButton} ${commonStyles.recoveryButton}`}
              onClick={handleRecovery}
            />
          </div>
          {/* Mensaje de "¿Ya tienes una cuenta?" con estilos del módulo CSS */}
          <p className={commonStyles.forget}>
            ¿Ya tienes una cuenta?{' '}
            {/* Utiliza Link para redirigir al usuario a la página de login */}
            <Link href="/user/login">Iniciar Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

// Exporta el componente de recuperación de contraseña
export default finduser;
