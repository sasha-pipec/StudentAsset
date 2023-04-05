import React from "react";
import classes from "./Header.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import Loginmodal from "../loginmodal/Loginmodal";
import ModalStore from "../../store/ModalStore";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/UserStore";
import "./Layout.css";
import UserModal from "../modal/UserModal";
import UserModalStore from "../../store/UserModalStore";
const Header = observer(() => {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} to="/main">
          Коннект
        </Link>
        <nav className={classes.nav_container}>
          <NavLink className={classes.navigation} to="/vote">
            голосование
          </NavLink>
          <NavLink className={classes.navigation} to="/">
            афиша
          </NavLink>
          <NavLink className={classes.navigation} to="/dada">
            обсуждения
          </NavLink>
        </nav>
        {UserStore.isAuthenticated ? (
          <div className={classes.btn_container}>
            <button
              className={classes.header__btn}
              onClick={() => UserModalStore.changeVisible()}>
              <p className={classes.header__btn_title}>
                {UserStore.first_name} {UserStore.last_name}
              </p>
              <p className={classes.header__btn_subtitle}>{UserStore.role}</p>
            </button>
            <UserModal />
          </div>
        ) : (
          <button
            className={classes.header__btn_login}
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
