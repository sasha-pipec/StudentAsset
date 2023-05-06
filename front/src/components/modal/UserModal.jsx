import React from "react";
import classes from "./UserModal.module.css";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
const UserModal = observer(() => {
  const rootCl = [classes.wrapper];
  if (store.userModal.visible) {
    rootCl.push(classes.open);
  }
  function logout() {
    store.userModal.setVisible(false);
    store.user.logout();
  }
  return (
    <div className={rootCl.join(" ")}>
      <button className={classes.btn}>помощь</button>
      <button onClick={logout} className={classes.btn}>
        выйти{" "}
      </button>
    </div>
  );
});
export default UserModal;
