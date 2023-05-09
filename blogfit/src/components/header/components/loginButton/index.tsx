import React from "react";
import './style.scss';
import { useNavigate} from 'react-router-dom';

function LoginButton(){
    const navigate = useNavigate();

    return(
        <div onClick={() => navigate('/logar')} id="loginWrap">
            <p>LOGIN</p>
        </div>
    )
    }

export default LoginButton