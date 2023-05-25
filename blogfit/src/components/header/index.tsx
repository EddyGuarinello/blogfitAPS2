import React from "react";
import "./style.scss";
import LoginButton from "./components/loginButton";
import { useNavigate } from "react-router-dom";

interface infosPagina {
  nomePagina: string;
}

function Header(props: infosPagina) {
  const navigate = useNavigate();

  function hasToken() {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    } else {
      return true;
    }
  }
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
      </span>
      <div id="blankSpace"></div>
      <div id="buttonsSpace">
        <span id="buttonsTab">
          <LoginButton logado={hasToken()}></LoginButton>
        </span>
      </div>
    </div>
  );
}

export default Header;
