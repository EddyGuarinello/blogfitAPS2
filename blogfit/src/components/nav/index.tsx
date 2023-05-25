import React from "react";
import style from "./Nav.module.scss";
import { GoSearch } from "react-icons/go";
import { IoMdFitness } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className={style.flex}>
      <div id={style.navWrap} className={style.flex}>
        <h1 onClick={() => navigate("/")} id={style.tituloLogo}>
          Blog Fit
          <IoMdFitness />
        </h1>
        <span></span>
      </div>
    </nav>
  );
}

export default Nav;
