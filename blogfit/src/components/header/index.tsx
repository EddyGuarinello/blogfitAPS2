import React from "react";
import "./style.scss";
import LoginButton from "./components/loginButton";
import { useNavigate } from "react-router-dom";

interface nomePagina {
  nomePagina: string;
}

function Header(props: nomePagina) {
  const navigate = useNavigate();

  return (
    <div id="headerWrap" className="contentHeaderWidth">
      <span id="linksWrap">
        <a
          onClick={() => navigate("/")}
          id={props.nomePagina == "artigos" ? "artigos" : ""}
        >
          Artigos
        </a>
        <a
          onClick={() => navigate("/criar")}
          id={props.nomePagina == "Criar" ? "Criar" : ""}
        >
          Crie um artigo
        </a>
        <a
          onClick={() => navigate("/contato")}
          id={props.nomePagina == "Contato" ? "Contato" : ""}
        >
          Fale Conosco
        </a>
      </span>
      <div id="blankSpace"></div>
      <div id="buttonsSpace">
        <span onClick={() => navigate("/login")} id="buttonsTab">
          <LoginButton></LoginButton>
        </span>
      </div>
    </div>
  );
}

export default Header;
