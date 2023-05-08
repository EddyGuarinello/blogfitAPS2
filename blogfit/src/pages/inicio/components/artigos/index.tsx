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
                                <p>Autor: Don Giovanni</p>
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

                    <div id='tituloArtigo'>
                        <h2>Dicas Para não fugir da dieta</h2>
                    </div>

                    <div id='corpoArtigo'>
                        <p>- Faça um diário e anote tudo o que come, como se sentiu após cada refeição, quantos quilos já eliminou, como foi o treino, como se sentiu após os exercícios, quais as dificuldades enfrentadas a cada dia, como as superou, quais foram as conquistas e falhas. Assim, fica mais fácil acompanhar e reconhecer o progresso, bem como identificar os pontos em que é preciso melhorar.

- Pense nos erros cometidos nas dietas do passado e use-os como lições para recomeçar. Faça de cada novo dia, uma nova oportunidade de ficar mais próximo de seu objetivo. O que pode mudar hoje para chegar a sua meta?

- Lembre-se que emagrecer requer tempo, afinal você demorou meses e, às vezes, até anos para engordar, portanto seja paciente. É preciso tempo para emagrecer e principalmente, incorporar novos hábitos alimentares a sua rotina.</p>
                    </div>
                    
                    <div id='footerArtigo'>
                        <p>Leia Mais</p>
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