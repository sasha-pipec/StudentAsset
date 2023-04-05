import React from "react";
import UserStore from "../../store/UserStore";
import classes from "./Login.module.css";
import ModalStore from "../../store/ModalStore";
const Loginmodal = ({ visible }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const get_token = event.target.auto_enter.checked;
    UserStore.login(username, password, get_token);
  }
  const rootCl = [classes.wrapper];
  if (visible) {
    rootCl.push(classes.active);
  }
  return (
    <aside
      className={rootCl.join(" ")}
      onClick={() => ModalStore.setVisible(false)}>
      <form
        action=""
        className={classes.form}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}>
        <p className={classes.title}>Вход</p>
        <input
          className={classes.input}
          type="text"
          name="username"
          id=""
          placeholder="Логин"
        />
        <input
          className={classes.input}
          type="text"
          name="password"
          id=""
          placeholder="Пароль"
        />
        <label htmlFor="auto_enter">
          <input type="checkbox" name="auto_enter" id="auto_enter" />
          Запомни меня
        </label>
        <button type="submit" className={classes.button}>
          Войти
        </button>
      </form>
    </aside>
  );
};

export default Loginmodal;
