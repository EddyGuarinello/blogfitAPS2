import React from 'react';
import './style.scss';
import MDEditor from '@uiw/react-md-editor';
import { useState } from "react";
import Nav from '../../components/nav';
import Header from '../../components/header';

function Criar(){
    const [value, setValue] = useState<string>("");

    const handleChange = (value: string = "", event?: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(value);
    };
    return (
        <>
        <Nav></Nav>
        <Header nomePagina='a'></Header>
        <div id='criarWrap'>
            <div id="headerCriar">
            <div><h1>Crie Seus Artigos</h1></div>
            <div id='menuCriar'>
                <h2>
                    Informe a categoria do artigo:
                </h2>
                <input type="radio" name='categoria' id='categoriaNutricao' value={"Nutrição"}/>
                <label htmlFor="categoriaNutricao">Nutrição</label>
                <input type="radio" name='categoria' id='categoriaSaude' value={"Saúde"}/>
                <label htmlFor="categoriaSaude">Saúde</label>
                <input type="radio" name='categoria' id='categoriaTreino' value={"Treino"}/>
                <label htmlFor="categoriaTreino">Treino</label>
                <input type="radio" name='categoria' id='categoriaDicas' value={"Dicas"}/>
                <label htmlFor="categoriaDicas">Dicas</label>
            </div>
            </div>
            <div id='editorWrap'>
                <MDEditor
                className='editor'
                value={value}
                onChange={handleChange}
                preview='edit'
                style={{minHeight:'250px'}}
                />
                <MDEditor.Markdown
                 className='result'
                 source={value} 
                 style={{ whiteSpace: 'pre-wrap', color:'blue', minHeight:'250px' }} 
                 />
            </div>
            <div id='footerCriar'>

            </div>
        </div>
      </>
    )
}

export default Criar