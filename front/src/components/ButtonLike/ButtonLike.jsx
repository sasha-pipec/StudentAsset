/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import classes from "./ButtonLike.module.css";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
export const ButtonLike = observer(({ id }) => {
  let token;
  useEffect(() => {
    if (store.user.isAuthenticated) {
      store.likeToggle.setLike(store.posts.singlePostIsLiked);
    }
    token = localStorage.getItem("token");
  }, [id]);

  const handleLike = async () => {
    if (store.user.isAuthenticated) {
      if (store.likeToggle.isLiked) {
        await store.posts.unlikePost(id);
        store.likeToggle.setLike(false);
        console.log("ДИЗЛАЙК");
      } else {
        await store.posts.likePost(id);
        store.likeToggle.setLike(true);
        console.log("ЛАЙК");
      }
    } else {
      alert("Войдите в аккаунт!");
    }
  };
  if (
    store.posts.singlePostIsLiked === true ||
    store.posts.singlePostIsLiked === false ||
    token === null
  ) {
    return (
      <>
        <button
          className={store.likeToggle.isLiked ? classes.like : classes.dislike}
          onClick={handleLike}>
          {store.likeToggle.isLiked ? "Передумал" : "хочу пойти"}
        </button>
      </>
    );
  } else {
    console.log(store.posts.singlePostIsLiked);
  }
});
