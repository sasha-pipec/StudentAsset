import React, { useEffect } from "react";
import classes from "./burgerModal.module.css";
import { NavLink } from "react-router-dom";
// import "./burgerModal.css";
import store from "../../store/store";
const BurgerModal = ({ visible }) => {
  const rootCl = [classes.wrapper];
  if (visible) {
    rootCl.push(classes.active);
  }
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [visible]);
  return (
    <aside
      className={rootCl.join(" ")}
      onClick={() => store.modal.setVisibleBurger(false)}>
      <nav className={classes.nav_container}>
        <NavLink className={classes.navigation} to="/vote">
          <p>голосование</p>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.15521 1.56297L25.3593 1.64065L25.437 18.8447M1.37669 25.6233L25.1195 1.88048"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
        <NavLink className={classes.navigation} to="/events">
          <p>афиша</p>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.15521 1.56297L25.3593 1.64065L25.437 18.8447M1.37669 25.6233L25.1195 1.88048"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
        {/* <NavLink className={classes.navigation} to="/dada">
          <p>обсуждения</p>
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.15521 1.56297L25.3593 1.64065L25.437 18.8447M1.37669 25.6233L25.1195 1.88048"
              stroke="black"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink> */}
        {store.user.isAuthenticated ? (
          <button
            className={classes.navigation_btn}
            onClick={() => store.user.logout()}>
            <p className={classes.header__btn_text}>Выйти</p>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.15521 1.56297L25.3593 1.64065L25.437 18.8447M1.37669 25.6233L25.1195 1.88048"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <button
            className={classes.navigation_btn}
            onClick={() => store.modal.setVisible(true)}>
            <p className={classes.header__btn_text}>войти</p>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.15521 1.56297L25.3593 1.64065L25.437 18.8447M1.37669 25.6233L25.1195 1.88048"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </nav>
    </aside>
  );
};

export default BurgerModal;
