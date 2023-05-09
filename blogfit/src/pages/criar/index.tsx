import React from "react";
import style from "./Criar.module.scss";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import Nav from "../../components/nav";
import Header from "../../components/header";

function Criar() {
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
            <input id={style.tituloForm} type="text" />
          </div>
          <div id={style.criarButtonWrap}>
            <div id={style.criarButton}>Criar!</div>
          </div>
        </div>
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
