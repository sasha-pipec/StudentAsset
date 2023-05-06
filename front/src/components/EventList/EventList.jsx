import React, { useEffect } from "react";
import classes from "./EventList.module.css";
import { EventItem } from "../EventItem/EventItem";
import { observer } from "mobx-react-lite";
import store from "../../store/store";

export const EventList = observer(() => {
  let page = 1;
  useEffect(() => {
    store.vote.getEvents(page);
  }, []);
  console.log(store.vote.VotePosts);
  return (
    <>
      <div className={classes.eventList}>
        {store.vote.VotePosts.map((el, index) => (
          <EventItem
            key={index + 1}
            index={el.id}
            img={el.image}
            title={el.title}
            date={el.date}
            description={el.description}
            total_votes={el.total_votes}
          />
        ))}
      </div>
      {/* <PaginationEvents /> */}
    </>
  );
});
