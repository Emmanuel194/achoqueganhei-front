import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Resultados from "../components/Resultados";
import NumerosRepetidos from "../components/NumerosRepetidos";
import SeuNumero from "../components/SeuNumero";
import LocalizarLoterica from "../components/localizarLoterica";
import "./dashboard.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("resultados");

  const renderSection = () => {
    switch (activeSection) {
      case "resultados":
        return <Resultados />;
      case "numeros-repetidos":
        return <NumerosRepetidos />;
      case "seu-numero":
        return <SeuNumero />;
      case "localizar-loterica":
        return <LocalizarLoterica />;
      default:
        return <Resultados />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">{renderSection()}</div>
    </div>
  );
};

export default Dashboard;
