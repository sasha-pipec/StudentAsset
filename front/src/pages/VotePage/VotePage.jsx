import React from "react";
import classes from "./VotePage.module.css";
import { CreateEvent } from "../../components/CreateEvent/CreateEvent";
import VoteStore from "../../store/VoteStore";
import { EventList } from "../../components/EventList/EventList";
const VotePage = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Предложенное студентами</h1>
      <EventList></EventList>
      <CreateEvent></CreateEvent>
    </div>
  );
};
export { VotePage };
