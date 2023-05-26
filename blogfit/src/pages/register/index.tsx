import React from "react";
import style from "./Register.module.scss";
import Nav from "../../components/nav";
import Header from "../../components/header";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validateEmail = (email: string) => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function Register() {
  function enviarDados() {
    if (clicked === true) {
      return console.log("não permitido.");
    }
    setClicked(true);
    const usuario = {
      email: (document.querySelector('input[name="email"]') as HTMLInputElement)
        .value,
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
    if (!validateEmail(usuario.email)) {
      alert("EMAIL INVALIDO");
      setClicked(false);
      return;
    }
    fetch("https://api-login-blogfit.vercel.app/register", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 400 || response.status === 401) {
          setClicked(false);
          setErrorCriar(true);
          throw new Error("Falha ao criar usuario.");
        }
        setClicked(false);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Conta criada!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  }
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [errorCriar, setErrorCriar] = useState(false);
  return (
    <div className="App">
      <Nav></Nav>
      <Header nomePagina="artigos"></Header>
      <section id={style.sectionRegister}>
        <form id={style.formRegister} action="">
          <h2 id={style.errorMessage}>
            {errorCriar === true ? "Falha ao criar usuario" : ""}
          </h2>

          <input
            className={style.inputInfoUser}
            placeholder="   Email"
            type="email"
            name="email"
          />
          <input
            className={style.inputInfoUser}
            placeholder="   Nome"
            type="text"
            name="nome"
          />
          <input
            className={style.inputInfoUser}
            placeholder="   Sobrenome"
            type="text"
            name="sobrenome"
          />
          <input
            className={style.inputInfoUser}
            placeholder="   Senha"
            type="password"
            name="senha"
          />
          <input
            id={style.buttonRegister}
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
