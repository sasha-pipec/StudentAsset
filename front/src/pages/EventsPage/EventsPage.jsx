import React, { useEffect } from "react";
import { PostList } from "../../components/PostsList/PostList";
import classes from "./EventsPage.module.css";
import PostsStore from "../../store/PostsStore";
import { observer } from "mobx-react-lite";
const EventsPage = observer(() => {
  // изменяем стэйт кнопки лайка на посте что бы отрисовка стейта была сразу правильной
  useEffect(() => {
    PostsStore.singlePostIsLiked = "";
  });

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
});
export { EventsPage };
