import React, { useEffect, useState } from "react";

import classes from "./DatePicker.module.css";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
const DatePicker = observer(({ disabled, id, date }) => {
  const [picked, setPicked] = useState(false);

  const [currentPostList, setCurrentPostList] = useState([]);
  const month = date.toLocaleString("default", { month: "long" });
  const dayOfWeek = date.toLocaleDateString("default", { weekday: "short" });
  const dayIndex = date.getDay();
  const isWeekend = dayIndex === 0 || dayIndex === 6;
  const picker = (date) => {
    if (picked === false) {
      setPicked(true);
      setCurrentPostList(store.posts.posts);
      let post = store.posts.datePosts.find((post) => {
        const postDate = new Date(post.date);
        const targetDate = new Date(date);
        return postDate.getDate() === targetDate.getDate();
      });
      let postsArr = [];
      postsArr.push(post);
      store.posts.setPosts(postsArr);
      console.log(postsArr);
      store.PickedDate.setPickedId(id);
    } else {
      setPicked(false);
      store.posts.setPosts(store.posts.currentPosts);
    }
  };

  useEffect(() => {
    if (store.PickedDate.pickedId === id) {
      setPicked(true);
    } else setPicked(false);
  }, [store.PickedDate.pickedId]);

  return (
    <button
      className={picked ? classes.activePicker : classes.picker}
      disabled={!disabled}
      onClick={() => {
        picker(date);
      }}>
      <p className={isWeekend ? classes.weekend : classes.weekday}>
        {dayOfWeek}
      </p>
      <p className={classes.date}>{date.getDate()}</p>
    </button>
  );
});

export default DatePicker;
