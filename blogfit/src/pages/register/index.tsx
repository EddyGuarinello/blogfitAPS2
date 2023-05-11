import React from "react";
import style from "./Register.module.scss";
import Nav from "../../components/nav";
import Header from "../../components/header";
import { v4 as uuidv4 } from "uuid";

function enviarDados() {
  interface SubmitLogin {
    username: string;
    nome: string;
    sobrenome: string;
    password: string;
  }
  const usuario = {
    username: (
      document.querySelector('input[name="email"]') as HTMLInputElement
    ).value,
    nome: (document.querySelector('input[name="nome"]') as HTMLInputElement)
      .value,
    sobrenome: (
      document.querySelector('input[name="sobrenome"]') as HTMLInputElement
    ).value,
    id: uuidv4(),
    password: (
      document.querySelector('input[name="senha"]') as HTMLInputElement
    ).value,
  };
  fetch("https://api-login-blogfit.vercel.app/register", {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function Register() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header nomePagina="artigos"></Header>
      <section id="sectionlogin">
        <form action="">
          <input
            className="inputInfoUser"
            placeholder="   Email"
            type="text"
            name="email"
          />
          <input
            className="inputInfoUser"
            placeholder="   Nome"
            type="text"
            name="nome"
          />
          <input
            className="inputInfoUser"
            placeholder="   Sobrenome"
            type="text"
            name="sobrenome"
          />
          <input
            className="inputInfoUser"
            placeholder="   Senha"
            type="text"
            name="senha"
          />
          <input
            className="inputInfoUser"
            value="Criar Usuario"
            type="button"
            onClick={enviarDados}
          />
        </form>
      </section>
    </div>
  );
}

export default Register;
