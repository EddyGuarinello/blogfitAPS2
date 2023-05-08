import React from 'react';
import './style.scss';
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
function Artigos() {
  return (
    <div id='artigosWrap'>
        <div id='wrapLayoutArtigo'>
            <div className='layoutArtigo'>
                <div id='wrapConteudoArtigo'>
                    <div id='topoArtigo'>
                        <div id='conteudoTopoArtigo'>
                            <div>
                                <p>Autor:</p>
                            </div>
                            <div>
                                <p>Avaliação:</p>
                                <span id='estrelas'>
                                    <AiFillStar/>
                                    <AiOutlineStar/>
                                    <AiOutlineStar/>
                                    <AiOutlineStar/>
                                    <AiOutlineStar/>  
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <div className='layoutArtigo'>

            </div>
        </div>
    </div>
  );
}

export default Artigos;