import React, { useEffect } from "react";
import { PostList } from "../../components/PostsList/PostList";
import classes from "./EventsPage.module.css";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
const EventsPage = observer(() => {
  // изменяем стэйт кнопки лайка на посте что бы отрисовка стейта была сразу правильной
  useEffect(() => {
    store.posts.singlePostIsLiked = "";
  });

  return (
    <div className={classes.wrapper}>
      <div>
        <h1 className={classes.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
      </div>
      <PostList></PostList>
    </div>
  );
});
export { EventsPage };
