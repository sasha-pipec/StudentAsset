import React from "react";
import classes from "./VotePage.module.css";
import { CreateEvent } from "../../components/CreateEvent/CreateEvent";
const VotePage = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Предложенное студентами</h1>
      <CreateEvent></CreateEvent>
    </div>
  );
};
export { VotePage };
