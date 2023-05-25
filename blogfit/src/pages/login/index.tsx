import React from "react";
import style from "./Login.module.scss";
import Nav from "../../components/nav";
import Header from "../../components/header";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

function Login() {
  const navigate = useNavigate();

  function enviarDados() {
    const usuario = {
      email: (document.querySelector('input[name="email"]') as HTMLInputElement)
        .value,
      password: (
        document.querySelector('input[name="senha"]') as HTMLInputElement
      ).value,
    };
    setLoading(true);
    try {
      fetch("https://api-login-blogfit.vercel.app/login", {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 400 || response.status === 401) {
            setErrorLogin(true);
            throw new Error("Usuário ou senha incorretos.");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("token", data.token);
          console.log(data);
          window.location.href = "https://blogfit-aps-2.vercel.app/";
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Nav></Nav>
      <Header nomePagina="artigos"></Header>
      <section id={style.sectionLogin}>
        <form id={style.formLogin} onSubmit={handleSubmit} action="">
          <h2 id={style.errorMessage}>
            {errorLogin === true ? "Usuário e/ou senha incorretos." : ""}
          </h2>

          <h2 id={style.contaH2}>
            Não possui uma conta?{" "}
            <span onClick={() => navigate("/register")} id={style.register}>
              Registre-se
            </span>
          </h2>
          <input
            className={style.inputInfoUser}
            placeholder="   Email"
            type="text"
            name="email"
          />
          <input
            className={style.inputInfoUser}
            placeholder="   Senha"
            type="password"
            name="senha"
          />
          <input
            id={style.button}
            value="Logar Usuario"
            type="button"
            onClick={enviarDados}
            disabled={loading}
          />
        </form>
      </section>
    </div>
  );
}

export default Login;
