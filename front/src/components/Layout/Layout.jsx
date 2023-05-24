/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./Layout.module.css";
import Loginmodal from "../loginmodal/Loginmodal";
import { observer } from "mobx-react-lite";
import UserModal from "../modal/UserModal";
import burgerLogo from "../../assets/images/burger_logo.svg";
import burgerClose from "../../assets/images/burger_close.svg";
import store from "../../store/store";
import BurgerModal from "../burgerModal/burgerModal";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
const Layout = observer(({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          Коннект
        </Link>
        <nav className={classes.nav_container}>
          <Link
            className={
              pathname === "/vote" ? classes.active : classes.navigation
            }
            href="vote">
            голосование
          </Link>
          <Link
            className={
              pathname === "/events" ? classes.active : classes.navigation
            }
            href="events">
            афиша
          </Link>
        </nav>
        {store.user.isAuthenticated ? (
          <div className={classes.btn_container}>
            <button
              className={classes.header__btn}
              onClick={() => store.userModal.changeVisible()}>
              <p className={classes.header__btn_title}>
                {store.user.first_name} {store.user.last_name}
              </p>
              <p className={classes.header__btn_subtitle}>{store.user.role}</p>
            </button>
            <UserModal />
          </div>
        ) : (
          <button
            className={classes.header__btn_login}
            onClick={() => store.modal.setVisible(true)}>
            <p className={classes.header__btn_text}>войти</p>{" "}
          </button>
        )}
        {store.modal.burgervisible ? (
          <button
            className={classes.burgerBtn}
            onClick={() => {
              store.modal.setVisibleBurger(false);
            }}>
            <Image src={burgerClose} alt="" width={"100%"} height={"100%"} />
          </button>
        ) : (
          <button
            className={classes.burgerBtn}
            onClick={() => {
              store.modal.setVisibleBurger(true);
            }}>
            <Image src={burgerLogo} alt="" width={"100%"} height={"100%"} />
          </button>
        )}
      </header>
      <Loginmodal visible={store.modal.visible} />
      <BurgerModal visible={store.modal.burgervisible}></BurgerModal>
      {children}
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footerLogo}>
            <svg
              width="352"
              height="61"
              viewBox="0 0 352 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M35.3094 60.0315L14.8895 32.8819H7.58009V60.0315H0.386719V0.880001H7.58009V26.5277H10.7126L34.4972 0.880001H43.0828L19.0663 26.8743L43.895 60.0315H35.3094ZM96.4371 30.4557C96.4371 36.6944 95.3058 42.0858 93.0434 46.63C90.781 51.1742 87.6774 54.6786 83.7326 57.1432C79.7879 59.6079 75.2824 60.8402 70.2161 60.8402C65.1497 60.8402 60.6442 59.6079 56.6995 57.1432C52.7548 54.6786 49.6511 51.1742 47.3887 46.63C45.1263 42.0858 43.9951 36.6944 43.9951 30.4557C43.9951 24.2172 45.1263 18.8257 47.3887 14.2815C49.6511 9.73731 52.7548 6.23291 56.6995 3.76826C60.6442 1.30361 65.1497 0.0712891 70.2161 0.0712891C75.2824 0.0712891 79.7879 1.30361 83.7326 3.76826C87.6774 6.23291 90.781 9.73731 93.0434 14.2815C95.3058 18.8257 96.4371 24.2172 96.4371 30.4557ZM89.4758 30.4557C89.4758 25.3339 88.6152 21.0112 86.8943 17.4875C85.1926 13.9638 82.8818 11.297 79.9619 9.48701C77.0613 7.67704 73.8127 6.77205 70.2161 6.77205C66.6194 6.77205 63.3611 7.67704 60.4412 9.48701C57.5407 11.297 55.2298 13.9638 53.5088 17.4875C51.8072 21.0112 50.9564 25.3339 50.9564 30.4557C50.9564 35.5776 51.8072 39.9004 53.5088 43.424C55.2298 46.9477 57.5407 49.6146 60.4412 51.4245C63.3611 53.2345 66.6194 54.1395 70.2161 54.1395C73.8127 54.1395 77.0613 53.2345 79.9619 51.4245C82.8818 49.6146 85.1926 46.9477 86.8943 43.424C88.6152 39.9004 89.4758 35.5776 89.4758 30.4557ZM104.449 60.0315V0.880001H111.641V27.2209H143.316V0.880001H150.509V60.0315H143.316V33.575H111.641V60.0315H104.449ZM160.826 60.0315V0.880001H168.02V27.2209H199.694V0.880001H206.887V60.0315H199.694V33.575H168.02V60.0315H160.826ZM217.204 60.0315V0.880001H253.055V7.23417H224.398V27.2209H251.199V33.575H224.398V53.6774H253.52V60.0315H217.204ZM296.859 60.0315L276.44 32.8819H269.13V60.0315H261.937V0.880001H269.13V26.5277H272.263L296.048 0.880001H304.633L280.616 26.8743L305.446 60.0315H296.859ZM307.409 7.23417V0.880001H351.961V7.23417H333.282V60.0315H326.088V7.23417H307.409Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={classes.footerLinks_container}>
            <div className={classes.footer_firstRow}>
              <div>
                <p className={classes.footerLink__title}>события</p>
                <Link className={classes.footerLink} href="/events">
                  ближайшие
                </Link>
                <Link className={classes.footerLink} href="/vote">
                  голосование
                </Link>
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
export default Layout;
