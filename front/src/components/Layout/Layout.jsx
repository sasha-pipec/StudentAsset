/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./Layout.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import Loginmodal from "../loginmodal/Loginmodal";
import ModalStore from "../../store/ModalStore";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/UserStore";
import "./Layout.css";
import UserModal from "../modal/UserModal";
import UserModalStore from "../../store/UserModalStore";
import logo from "../../images/logo_footer.svg";
const Layout = observer(() => {
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
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLogo}>
            <img src={logo} alt="" />
          </div>
          <div className={classes.footerLinks_container}>
            <div className={classes.footer_firstRow}>
              <div>
                <p className={classes.footerLink__title}>события</p>
                <NavLink className={classes.footerLink} to="/">
                  ближайшие
                </NavLink>
                <NavLink className={classes.footerLink} to="/main">
                  голосование
                </NavLink>
              </div>
              <div>
                <p className={classes.footerLink__title}>контакты</p>
                <a href="tel:+79301551642" className={classes.footerLink}>
                  Телефон
                </a>
                <a href="#" className={classes.footerLink}>
                  почта
                </a>
                <a href="https://vk.com/gojlyb" className={classes.footerLink}>
                  вк
                </a>
              </div>
            </div>
            <div className={classes.footer_secondRow}>
              <p className={classes.footerLink__title}>Правовая информация</p>
              <a href="#" className={classes.footerLink}>
                Обработка пресональных данных
              </a>
              <a href="#" className={classes.footerLink}>
                Условия использования сайта
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});
export { Layout };
