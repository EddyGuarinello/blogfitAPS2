import React from "react";
import './style.scss';
import LoginButton from "./components/loginButton";

function Header(){
return(
   <div id="headerWrap" className="contentHeaderWidth">
      <span id="linksWrap">
         <a href="google.com.br">Artigos</a>
         <a href="google.com.br">Fale Conosco</a>
         <a href="google.com.br">Crie um artigo</a>
      </span>
      <div id="blankSpace">

      </div>
      <div id="buttonsSpace">
         <span id="buttonsTab">
         <LoginButton></LoginButton>
         </span>
      </div>
   </div>
)
}

export default Header