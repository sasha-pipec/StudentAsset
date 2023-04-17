import React, { useEffect } from "react";
import PostsStore from "../../store/PostsStore";
import classes from "./ButtonLike.module.css";
import { observer } from "mobx-react-lite";
import UserStore from "../../store/UserStore";
import LikeToggleStore from "../../store/LikeToggleStore";
export const ButtonLike = observer(({ id }) => {
  useEffect(() => {
    if (UserStore.isAuthenticated) {
      LikeToggleStore.setLike(PostsStore.singlePostIsLiked);
    }
  }, [id]);

  const handleLike = async () => {
    if (UserStore.isAuthenticated) {
      if (LikeToggleStore.isLiked) {
        await PostsStore.unlikePost(id);
        LikeToggleStore.setLike(false);
        console.log("ДИЗЛАЙК");
      } else {
        await PostsStore.likePost(id);
        LikeToggleStore.setLike(true);
        console.log("ЛАЙК");
      }
    } else {
      alert("Войдите в аккаунт!");
    }
  };
  const token = localStorage.getItem("token");
  if (
    PostsStore.singlePostIsLiked === true ||
    PostsStore.singlePostIsLiked === false ||
    token === null
  ) {
    return (
      <>
        <button
          className={LikeToggleStore.isLiked ? classes.like : classes.dislike}
          onClick={handleLike}>
          {LikeToggleStore.isLiked ? "Передумал" : "хочу пойти"}
        </button>
      </>
    );
  } else {
    console.log(PostsStore.singlePostIsLiked);
  }
});
