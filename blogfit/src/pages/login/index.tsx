import React from "react";
import style from "./Login.module.scss";
import Nav from "../../components/nav";
import Header from "../../components/header";
import { v4 as uuidv4 } from "uuid";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("submit.");
}

function enviarDados() {
  const usuario = {
    username: (
      document.querySelector('input[name="email"]') as HTMLInputElement
    ).value,
    password: (
      document.querySelector('input[name="senha"]') as HTMLInputElement
    ).value,
  };
  console.log(usuario);
  fetch("https://api-login-blogfit.vercel.app/login", {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      console.log(data);
      window.location.href = "https://blogfit-aps-2.vercel.app/";
    })
    .catch((error) => console.error(error));
}

function Login() {
  return (
    <div>
      <Nav></Nav>
      <Header nomePagina="artigos"></Header>
      <section id={style.sectionLogin}>
        <form onSubmit={handleSubmit} action="">
          <input
            className="inputInfoUser"
            placeholder="   Email"
            type="text"
            name="email"
          />
          <input
            className="inputInfoUser"
            placeholder="   Senha"
            type="text"
            name="senha"
          />
          <input
            className="inputInfoUser"
            value="Logar Usuario"
            type="button"
            onClick={enviarDados}
          />
        </form>
      </section>
    </div>
  );
}

export default Login;
