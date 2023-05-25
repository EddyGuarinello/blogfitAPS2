import React from "react";
import style from "./Inicio.module.scss";
import Nav from "../../components/nav";
import Header from "../../components/header";
import Artigos from "./components/artigos";
import { useNavigate } from "react-router-dom";

function Inicio() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header nomePagina="artigos"></Header>
      <section id={style.sectionArtigos}>
        <Artigos></Artigos>
      </section>
    </div>
  );
}

export default Inicio;
