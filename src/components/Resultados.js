import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Resultados.css";

const Resultados = () => {
  const [resultados, setResultados] = useState({
    megasena: [],
    lotofacil: [],
    quina: [],
    lotomania: [],
    timemania: [],
    duplasena: [],
    federal: [],
  });

  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/lottery/resultados"
        );
        console.log("Dados recebidos do backend:", response.data);
        setResultados(response.data);
      } catch (error) {
        console.error("Erro ao obter resultados:", error);
      }
    };

    fetchResultados();
  }, []);

  return (
    <div className="resultados-container">
      <h2>Resultados</h2>
      {Object.entries(resultados).map(([loteria, numeros]) => (
        <div className="resultado-card" key={loteria}>
          <h3>{loteria.charAt(0).toUpperCase() + loteria.slice(1)}</h3>
          <p>{numeros.join(" ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Resultados;
