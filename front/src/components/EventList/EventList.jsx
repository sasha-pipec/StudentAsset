import React, { useEffect } from "react";
import classes from "./EventList.module.css";
import PostsStore from "../../store/PostsStore";
import VoteStore from "../../store/VoteStore";
import { EventItem } from "../EventItem/EventItem";
import { observer } from "mobx-react-lite";

export const EventList = observer(() => {
  let page = 1;
  useEffect(() => {
    VoteStore.getEvents(page);
  }, []);
  console.log(VoteStore.VotePosts);
  return (
    <>
      <div className={classes.eventList}>
        {VoteStore.VotePosts.map((el, index) => (
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
