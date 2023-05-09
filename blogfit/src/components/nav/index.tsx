import React from "react";
import './style.scss';
import { GoSearch } from 'react-icons/go';
import {IoMdFitness} from 'react-icons/io'
import { useNavigate} from 'react-router-dom';

function Nav(){
  const navigate = useNavigate();
return(
    <nav className='flex'>
        <div id='navWrap' className="flex">
              <h1 onClick={() => navigate('/')} id="tituloLogo">Blog Fit<IoMdFitness/></h1>
            <span id='searchBar' >
              <input id='inputNav' style={{width: "393px" ,height: '40px'}} type="text" placeholder='O que deseja encontrar?' />
              <span><GoSearch onClick={() => navigate('/search')} id='lupa'/></span>
            </span>
        </div>
    </nav>
)
}

export default Nav