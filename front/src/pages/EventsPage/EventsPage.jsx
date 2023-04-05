import React from "react";
import { PostList } from "../../components/PostsList/PostList";
import classes from "./EventsPage.module.css";
const EventsPage = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <h1 className={classes.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
      </div>
      <div>
        <PostList></PostList>
      </div>
    </div>
  );
};
export { EventsPage };
