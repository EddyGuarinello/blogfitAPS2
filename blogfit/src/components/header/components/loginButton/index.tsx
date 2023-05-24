import React from "react";
import style from "./LoginButton.module.scss";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

interface infos {
  logado?: boolean;
}

function LoginButton(props: infos) {
  const navigate = useNavigate();

  return (
    <div>
      {props.logado ? (
        <CgProfile
          onClick={() => navigate("/register")}
          id={style.profile}
        ></CgProfile>
      ) : (
        <div onClick={() => navigate("/login")} id={style.loginWrap}>
          <p>LOGIN</p>
        </div>
      )}
    </div>
  );
}

export default LoginButton;
