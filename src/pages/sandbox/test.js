import React, { useEffect } from "react";
import Link from "next/link";

// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//     if (req.readyState == XMLHttpRequest.DONE) {
//         console.log(req.responseText);
//     }
// };

// req.open("GET", "https://api.jsonbin.io/v3/b/65c49f4a1f5677401f2c8002", true);
// req.setRequestHeader("X-Master-Key", "$2a$10$qe1GTnVymPReZ4MJLD7tUOrJvf6CshpjpPgjwrpht0NuKsDZcemc6");
// req.send();

// const response = JSON.parse(req)
// console.log("req", req)
// console.log("response", response)

const Test = () => {
  const BIN_ID = "65c7d94b1f5677401f2d9486";
  const API_KEY =
    "$2a$10$qe1GTnVymPReZ4MJLD7tUOrJvf6CshpjpPgjwrpht0NuKsDZcemc6";

  async function leerBin() {
    try {
      // URL del bin que deseamos leer
      const url = "https://api.jsonbin.io/v3/b/" + BIN_ID;

      // Opciones para la solicitud
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
      };

      // Realizar la solicitud de lectura
      const response = await fetch(url, options);

      // Verificar si la respuesta es exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error("Error al leer el bin");
      }

      // Convertir la respuesta a formato JSON
      const data = await response.json();

      // Manipular los datos obtenidos del bin
      console.log("Datos del bin:", data);
    } catch (error) {
      // Capturar y manejar cualquier error que ocurra durante la solicitud
      console.error("Error:", error);
    }
  }

  async function insertarRegistro(nombrePersona) {
    try {
      // URL del bin donde deseamos insertar el registro
      const url = "https://api.jsonbin.io/v3/b/" + BIN_ID;

      // Datos del nuevo registro que queremos insertar en el bin
      const nuevoRegistro = {
        nombre: nombrePersona,
      };

      // Opciones para la solicitud
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify(nuevoRegistro),
      };

      // Realizar la solicitud para insertar el nuevo registro en el bin
      const response = await fetch(url, options);

      // Verificar si la respuesta es exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error("Error al insertar el registro");
      }

      // Convertir la respuesta a formato JSON
      const data = await response.json();

      // Manipular los datos obtenidos (opcional)
      console.log("Registro insertado correctamente:", data);
    } catch (error) {
      // Capturar y manejar cualquier error que ocurra durante la solicitud
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // Llamar a la función para leer el bin
    leerBin();
  }, []);

  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <button onClick={() => insertarRegistro("Nuevo nombre")}>
        TEST insertar
      </button>
    </>
  );
};

export default Test;
