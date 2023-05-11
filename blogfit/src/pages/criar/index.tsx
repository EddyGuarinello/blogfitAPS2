import React from "react";
import style from "./Criar.module.scss";
import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect } from "react";
import Nav from "../../components/nav";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Criar() {
  function enviarDados() {
    interface ArtigoBody {
      Id: string;
      Titulo: string;
      Autor: string;
      Corpo: string;
      Likes: number;
      Link: string;
      Categoria: number;
    }
    const artigo = {
      Id: uuidv4(),
      Titulo: (
        document.querySelector('input[name="titulo"]') as HTMLInputElement
      ).value,
      Autor: "endpoint em construção",
      Corpo: value,
      Likes: "0",
      Link: (
        document.querySelector('input[name="titulo"]') as HTMLInputElement
      ).value.replace(/\s+/g, "-"),
      Categoria: (
        document.querySelector('input[name="categoria"]') as HTMLInputElement
      ).value,
    };
    console.log(artigo);
    fetch("https://api-blogfit.vercel.app/artigos", {
      method: "POST",
      body: JSON.stringify(artigo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  const [tokenValido, setTokenValido] = useState(false);
  const navigate = useNavigate();
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
        setTokenValido(true);
      } else {
        localStorage.token = "";
      }
    }

    verificaToken();
  }, []);

  const [value, setValue] = useState<string>("");

  const handleChange = (
    value: string = "",
    event?: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(value);
  };

  return (
    <>
      <Nav></Nav>
      <Header nomePagina="a"></Header>
      <div id={style.criarWrap}>
        <form action="">
          <div id={style.headerCriar}>
            <div>
              <h1 id={style.h1Topo}>Crie Seus Artigos</h1>
            </div>
            <div id={style.menuCriar} className={style.h2Form}>
              <h2>Informe a Categoria do Artigo:</h2>
              <div>
                <input
                  type="radio"
                  name="categoria"
                  id="categoriaNutricao"
                  value={"Nutrição"}
                />
                <label htmlFor="categoriaNutricao">Nutrição</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="categoria"
                  id="categoriaSaude"
                  value={"Saúde"}
                />
                <label htmlFor="categoriaSaude">Saúde</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="categoria"
                  id="categoriaTreino"
                  value={"Treino"}
                />
                <label htmlFor="categoriaTreino">Treino</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="categoria"
                  id="categoriaDicas"
                  value={"Dicas"}
                />
                <label htmlFor="categoriaDicas">Dicas</label>
              </div>
            </div>
            <div className={style.h2Form}>
              <h2>Informe o Titulo do seu Artigo</h2>
              <input id={style.tituloForm} type="text" name="titulo" />
            </div>
            <div id={style.criarButtonWrap}>
              {tokenValido && (
                <div onClick={enviarDados} id={style.criarButton}>
                  Criar!
                </div>
              )}
              {!tokenValido && (
                <div onClick={() => navigate("/login")} id={style.criarButton}>
                  Você precisa se logar!
                </div>
              )}
            </div>
          </div>
        </form>
        <div id={style.editorWrap}>
          <MDEditor
            className={style.editor}
            value={value}
            onChange={handleChange}
            preview="edit"
            style={{
              minHeight: "250px",
              background: "white",
              color: "black",
            }}
          />
          <MDEditor.Markdown
            className={style.result}
            source={value}
            style={{
              whiteSpace: "pre-wrap",
              color: "black",
              minHeight: "250px",
              background: "white",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Criar;
