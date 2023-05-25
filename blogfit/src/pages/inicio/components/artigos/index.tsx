import React from "react";
import "./style.scss";
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";

interface Artigo {
  Id: string;
  Titulo: string;
  Autor: string;
  Corpo: string;
  Likes: number;
  Link: string;
  Categoria: string;
  dataDeCriacao: Date;
}

function Artigos() {
  const navigate = useNavigate();
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  useEffect(() => {
    async function obterDadosDaApi() {
      const response = await fetch(
        "https://api-login-blogfit.vercel.app/artigos"
      );
      const data = await response.json();
      const doisArtigos = data.slice(0, 2);
      setArtigos(doisArtigos);
    }
    obterDadosDaApi();
  }, []);

  return (
    <div id="artigosWrap">
      <div id="wrapLayoutArtigo">
        {artigos.map((item, index) => (
          <div className="layoutArtigo" key={uuidv4()}>
            <div id="wrapConteudoArtigo">
              <div id="topoArtigo">
                <div id="conteudoTopoArtigo">
                  <div>
                    <p>Autor: {item.Autor}</p>
                  </div>
                  <div id="likesBox">
                    <span id="likes">
                      <AiFillLike /> {item.Likes}
                    </span>
                  </div>
                </div>
              </div>
              <div id="artigo">
                <div
                  onClick={() => navigate("/artigo/" + item.Link)}
                  id="tituloArtigo"
                >
                  <h2>{item.Titulo}</h2>
                </div>

                <div id="corpoArtigo">
                  {/* <p>{item.Corpo.slice(0, 355)} ...</p> */}
                  <ReactMarkdown>
                    {item.Corpo.slice(0, 355) + " ..."}
                  </ReactMarkdown>
                </div>

                <div id="footerArtigo">
                  <p onClick={() => navigate("/artigo/" + item.Link)}>
                    Ler Mais
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artigos;
