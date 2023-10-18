import React, { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import "./Info/info.css"; // Asegúrate de que la ruta al archivo CSS sea correcta

const Informacion = ({ nombre, biografia }) => {
  const [textoNombre, setTextoNombre] = useState(""); // Estado para el nombre
  const velocidadEscritura = 50; // Velocidad de escritura en milisegundos
  const velocidadBorrado = 30; // Velocidad de borrado en milisegundos
  const tiempoEspera = 2000; // Tiempo de espera antes de borrar el texto

  useEffect(() => {
    let caracterActual = 0;
    let intervaloEscritura;
    let intervaloBorrado;
    let intervaloReescritura;
    let barraVisible = false;

    const escribirTexto = () => {
      const textoCompleto = `${nombre}: ${biografia}`;
      intervaloEscritura = setInterval(() => {
        if (caracterActual <= textoCompleto.length) {
          if (barraVisible) {
            setTextoNombre(textoCompleto.slice(0, caracterActual));
            barraVisible = false;
          } else {
            setTextoNombre(textoCompleto.slice(0, caracterActual) + "|");
            barraVisible = true;
          }
          caracterActual++;
        } else {
          clearInterval(intervaloEscritura);
          setTimeout(() => {
            let caracterBorrado = textoCompleto.length;
            intervaloBorrado = setInterval(() => {
              if (caracterBorrado >= 0) {
                setTextoNombre(textoCompleto.slice(0, caracterBorrado));
                caracterBorrado--;
              } else {
                clearInterval(intervaloBorrado);
                setTimeout(() => {
                  caracterActual = 0;
                  intervaloReescritura = setInterval(() => {
                    if (caracterActual <= textoCompleto.length) {
                      if (barraVisible) {
                        setTextoNombre(textoCompleto.slice(0, caracterActual));
                        barraVisible = false;
                      } else {
                        setTextoNombre(textoCompleto.slice(0, caracterActual) + "|");
                        barraVisible = true;
                      }
                      caracterActual++;
                    } else {
                      clearInterval(intervaloReescritura);
                      // Iniciar el proceso nuevamente después de un tiempo de espera
                      setTimeout(escribirTexto, tiempoEspera);
                    }
                  }, velocidadEscritura);
                }, tiempoEspera);
              }
            }, velocidadBorrado);
          }, tiempoEspera);
        }
      }, velocidadEscritura);
    };

    escribirTexto(); // Iniciar la escritura inicial

    return () => {
      // Limpiar los intervalos si el componente se desmonta
      clearInterval(intervaloEscritura);
      clearInterval(intervaloBorrado);
      clearInterval(intervaloReescritura);
    };
  }, [nombre, biografia]);

  return (
    <Html>
      <div className="container-info">
        <div className="card-info">
          <h1 className="nombre">{textoNombre}</h1>
          <p className="biografia">{}</p>
        </div>
      </div>
    </Html>
  );
};

export default Informacion;
