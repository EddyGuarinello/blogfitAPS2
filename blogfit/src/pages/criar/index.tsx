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
    if (clicked === true) {
      return console.log("não permitido.");
    }
    setClicked(true);
    const artigo = {
      id: uuidv4(),
      titulo: (
        document.querySelector('input[name="titulo"]') as HTMLInputElement
      ).value,
      autor: "Alguém",
      corpo: value,
      link: (
        document.querySelector('input[name="titulo"]') as HTMLInputElement
      ).value.replace(/\s+/g, "-"),
      categoria: (
        document.querySelector('input[name="categoria"]') as HTMLInputElement
      ).value,
    };
    console.log(artigo);
    fetch("https://api-login-blogfit.vercel.app/artigos", {
      method: "POST",
      body: JSON.stringify(artigo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 400 || response.status === 401) {
          setClicked(false);
          setErrorCriar(true);
          throw new Error("Falha ao criar artigo.");
        }
        setClicked(false);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("artigo criado!");
        navigate("/");
      })
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
        console.log(data.payload);
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
  const [errorCriar, setErrorCriar] = useState(false);
  const [clicked, setClicked] = useState(false);
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
              <h2>Selecione a Categoria do Artigo:</h2>
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
            <h2 id={style.errorMessage}>
              {errorCriar === true ? "Falha ao criar." : ""}
            </h2>
            <div id={style.criarButtonWrap}>
              {tokenValido && (
                <div
                  onClick={enviarDados}
                  id={style.criarButton}
                  className={style.criarButton}
                >
                  Criar!
                </div>
              )}
              {!tokenValido && (
                <div
                  onClick={() => navigate("/login")}
                  id={style.buttonLogar}
                  className={style.criarButton}
                >
                  Você precisa se logar para criar artigos!
                </div>
              )}
            </div>
          </div>
        </form>
        <div id={style.editorWrap}>
          <h2>Editor markdown</h2>
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
          <h2>Preview do artigo</h2>
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
