import React from "react";
import classes from "./UserModal.module.css";
import UserModalStore from "../../store/UserModalStore";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/UserStore";
const UserModal = observer(() => {
  const rootCl = [classes.wrapper];
  if (UserModalStore.visible) {
    rootCl.push(classes.open);
  }
  function logout() {
    UserModalStore.setVisible(false);
    UserStore.logout();
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
