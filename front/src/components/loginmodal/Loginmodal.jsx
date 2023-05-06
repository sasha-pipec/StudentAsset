import React, { useEffect } from "react";
import classes from "./Login.module.css";
import store from "../../store/store";
const Loginmodal = ({ visible }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const get_token = event.target.auto_enter.checked;
    store.user.login(username, password, get_token);
  }
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
      onClick={() => store.modal.setVisible(false)}>
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
        <label htmlFor="auto_enter" className={classes.checkboxContainer}>
          <input
            type="checkbox"
            name="auto_enter"
            id="auto_enter"
            className={classes.realCheckbox}
          />
          <span className={classes.checkmark}></span>
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
