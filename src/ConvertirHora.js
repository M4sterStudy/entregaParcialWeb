import React, { useState } from "react";

function convertirSegundosAHora(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  return `${horas} horas ${minutos} minutos ${segundos} segundos`;
}

function ConvertirHora() {
  // Punto 1
  const [segundosInput, setSegundosInput] = useState(0);
  const [horaConvertida, setHoraConvertida] = useState("");

  const handleInputChange = (event) => {
    setSegundosInput(event.target.value);
  };

  const handleConvertirClick = () => {
    const segundos = parseInt(segundosInput);
    const horaFormateada = convertirSegundosAHora(segundos);
    setHoraConvertida(horaFormateada);
    console.log("Hora convertida:", horaFormateada);
  };

  // Punto 2
  const [duracion, setDuracion] = useState(0);
  const [costoTotal, setCostoTotal] = useState(0);

  const handleDuracionChange = (event) => {
    setDuracion(event.target.value);
  };

  const handleCalcularClick = () => {
    const costo = CalcularLlamada(parseInt(duracion));
    setCostoTotal(costo);
    console.log("Costo de la llamada:", costo);
  };

  function CalcularLlamada(duracionLlamada) {
    const TarifaBase = 100;
    const TarifaAdisional = 50;
    const DuracionBase = 3;

    if (duracionLlamada <= DuracionBase) {
      return TarifaBase;
    } else {
      const minutosAdicionales = duracionLlamada - DuracionBase;
      const costoAdicional = minutosAdicionales * TarifaAdisional;
      return TarifaBase + costoAdicional;
    }
  }

  // Punto 3
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
  };

  const obtenerSaludoSegunHora = () => {
    const horaNumero = parseInt(hora);
    let saludo = "";

    if (horaNumero >= 0 && horaNumero < 12) {
      saludo = `Buenos días, ${nombre}`;
    } else if (horaNumero >= 12 && horaNumero < 18) {
      saludo = `Buenas tardes, ${nombre}`;
    } else {
      saludo = `Buenas noches, ${nombre}`;
    }

    console.log(saludo);
    return saludo;
  };

  return (
    <>
      {/* Punto 1 */}
      <p>punto 1</p>
      <input
        type="number"
        value={segundosInput}
        onChange={handleInputChange}
      />
      <button onClick={handleConvertirClick}>Convertir</button>
      <p>{horaConvertida}</p>

      {/* Punto 2 */}
      <p>punto 2</p>
      <input
        type="number"
        value={duracion}
        onChange={handleDuracionChange}
      />
      <button onClick={handleCalcularClick}>Calcular Costo</button>
      <p>Costo de la llamada: {costoTotal} pesos</p>

      {/* Punto 3 */}
      <p>punto 3</p>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <label>
        Hora:
        <input type="number" value={hora} onChange={handleHoraChange} />
      </label>
      <button onClick={obtenerSaludoSegunHora}>Saludo</button>
      <p>Saludo: "no pude imprimir el saludo en la pantalla, se lo quedo debiendo profe" pesos</p>

    </>
  );
}

export default ConvertirHora;
