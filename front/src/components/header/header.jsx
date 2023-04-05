import React from "react";
import classes from "./Header.module.css";
import { Link, Outlet } from "react-router-dom";
import Loginmodal from "../loginmodal/Loginmodal";
import ModalStore from "../../store/ModalStore";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/UserStore";
const Header = observer(() => {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} to="/main">
          Коннект
        </Link>
        <nav>
          <Link className={classes.navigation} to="/vote">
            голосование
          </Link>
          <Link className={classes.navigation} to="/">
            афиша
          </Link>
          <Link className={classes.navigation} to="/dada">
            обсуждения
          </Link>
        </nav>
        {UserStore.isAuthenticated ? (
          <button className={classes.header__btn}>
            <p className={classes.header__btn_text}>
              {UserStore.first_name} {UserStore.last_name}
            </p>{" "}
          </button>
        ) : (
          <button
            className={classes.header__btn}
            onClick={() => ModalStore.setVisible(true)}>
            <p className={classes.header__btn_text}>войти</p>{" "}
          </button>
        )}
      </header>
      <Loginmodal visible={ModalStore.visible} />
      <Outlet />
    </>
  );
});
export { Header };
