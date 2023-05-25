import React from "react";
import style from "./Profile.module.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Nav from "../../components/nav";
import Header from "../../components/header";
import { CgProfile } from "react-icons/cg";

interface usuario {
  id: Number;
  email: string;
  nome: string;
  sobrenome: string;
}
export default function Profile() {
  const navigate = useNavigate();
  const [primeiroEffectTerminou, setPrimeiroEffectTerminou] = useState(false);
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState<usuario>({} as usuario);

  useEffect(() => {
    async function verificaToken() {
      const response = await fetch(
        "https://api-login-blogfit.vercel.app/validateToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: localStorage.getItem("token") }),
        }
      );
      const data = await response.json();

      if (data.valid) {
        setUserId(data.payload.id);
        setPrimeiroEffectTerminou(true);
      } else {
        localStorage.token = "";
        alert("Você precisa se logar novamente.");
        navigate("/");
      }
    }

    verificaToken();
  }, []);
  useEffect(() => {
    async function obterDadosDaApi() {
      const response = await fetch(
        `https://api-login-blogfit.vercel.app/users/${userId}`
      );
      const data = await response.json();
      setUserData(data[0]);
    }

    obterDadosDaApi();
  }, [primeiroEffectTerminou]);

  function deslogar() {
    localStorage.token = "";
    navigate("/");
  }
  return (
    <div id={style.profileWrap}>
      <Nav></Nav>
      <Header nomePagina="profile"></Header>
      <div id={style.profileFlexBox}>
        {userData ? (
          <div id={style.profileBox}>
            <h1 className={style.boxItems}>
              {userData.nome + " " + userData.sobrenome}
            </h1>
            <CgProfile id={style.profileIcon}></CgProfile>
            <h1 className={style.boxItems}>
              Deseja deslogar?{" "}
              <span onClick={deslogar} id={style.logOut}>
                Clique aqui
              </span>{" "}
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
