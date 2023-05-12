import React from "react";
import style from "./Login.module.scss";
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
        <div onClick={() => navigate("/login")} id={style.loginWrap}>
          <p>LOGIN</p>
        </div>
      )}
    </>
  );
}

export default LoginButton;
