import React from 'react';
import './style.scss';
import { AiFillLike } from "react-icons/ai"
import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
          const response = await fetch('https://api-blogfit.vercel.app/artigos');
          const data = await response.json();
          setArtigos(data);
        }
        obterDadosDaApi();
      }, []);

      let artigo = artigos.filter(function(elemento:any){}).slice(0, 2);

  return (
    <div id='artigosWrap'>
        <div id='wrapLayoutArtigo'>
            {artigos.map((item, index)=>(
                <div className='layoutArtigo' key={uuidv4()}>
                    <div id='wrapConteudoArtigo'>
                        <div id='topoArtigo'>
                            <div id='conteudoTopoArtigo'>
                                <div>
                                    <p>Autor: {item.Autor}</p>
                                </div>
                                <div>
                                    <span id='likes'>
                                        <AiFillLike/> {item.Likes}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id='artigo'>
                            <div onClick={() => navigate('/artigo'+item.Link)}   id='tituloArtigo'>
                                <h2>{item.Titulo}</h2>
                            </div>

                            <div id='corpoArtigo'>
                                <p>{item.Corpo} ...</p>
                            </div>
                            
                            <div id='footerArtigo'>
                                <p onClick={() => navigate('/artigo'+item.Link)}>Ler Mais</p>
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