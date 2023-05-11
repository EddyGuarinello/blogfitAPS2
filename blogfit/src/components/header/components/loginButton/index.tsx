import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

interface infos {
  logado?: boolean;
}

function LoginButton(props: infos) {
  const navigate = useNavigate();

  return (
    <>
      {props.logado ? (
        ""
      ) : (
        <div onClick={() => navigate("/login")} id="loginWrap">
          <p>LOGIN</p>
        </div>
      )}
    </>
  );
}

export default LoginButton;
