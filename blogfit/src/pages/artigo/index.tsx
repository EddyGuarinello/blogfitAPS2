import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Nav from "../../components/nav";
import Header from "../../components/header";
import { AiFillLike } from "react-icons/ai";
import ReactMarkdown from "react-markdown";

interface ArtigoBody {
  Id: string;
  Titulo: string;
  Autor: string;
  Corpo: string;
  Likes: number;
  Link: string;
  Categoria: string;
  dataDeCriacao: Date;
}

function Artigo() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [artigo, setArtigo] = useState<ArtigoBody>({} as ArtigoBody);
  useEffect(() => {
    async function obterDadosDaApi() {
      const response = await fetch(
        "https://api-blogfit.vercel.app/artigos/" + slug
      );
      const data = await response.json();
      setArtigo(data[0]);
    }
    obterDadosDaApi();
  }, []);
  return (
    <>
      <Nav></Nav>
      <Header nomePagina="artigo"></Header>
      <section id="sectionArtigoWrap">
        <div id="artigoBox">
          <div id="menuArtigo">
            <div className="menuItem">#{artigo.Categoria}</div>
            <h1>{artigo.Titulo}</h1>
            <div className="menuItem">
              <span id="likeArtigo">
                <AiFillLike />
                {artigo.Likes}
              </span>
            </div>
          </div>

          <div id="corpoArtigoBox">
            <div id="conteudoArtigo">
              {/* <p>{artigo.Corpo}</p> */}
              <ReactMarkdown>{artigo.Corpo}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Artigo;
