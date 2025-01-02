import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li onClick={() => setActiveSection("resultados")}>Resultados</li>
        <li onClick={() => setActiveSection("numeros-repetidos")}>
          Números Repetidos
        </li>
        <li onClick={() => setActiveSection("seu-numero")}>Seu Número</li>
        <li onClick={() => setActiveSection("localizar-loterica")}>
          Localizar Lotérica
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
