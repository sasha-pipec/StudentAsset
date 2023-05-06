import React, { useEffect } from "react";
import classes from "./PaginationPosts.module.css";
import imgPrev from "../../assets/images/arrow_prev.svg";
import imgNext from "../../assets/images/arrow_next.svg";
import store from "../../store/store";
export const PaginationPosts = () => {
  const pageCount = store.posts.pages.length;
  const handleClick = (page) => {
    store.posts.getPosts(page);
  };
  const handlePrevClick = () => {
    const page = store.posts.CurrentPage > 1 ? store.posts.CurrentPage - 1 : 1;
    store.posts.getPosts(page);
  };

  const handleNextClick = () => {
    const page =
      store.posts.CurrentPage < pageCount
        ? store.posts.CurrentPage + 1
        : pageCount;
    store.posts.getPosts(page);
  };
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    //доделать компонент
    pages.push(
      <button
        className={store.posts.currentPage === i ? classes.active : classes.btn}
        key={i}
        onClick={() => handleClick(i)}>
        {i}
      </button>,
    );
  }
  return (
    <div className={classes.navigation_bar}>
      <button onClick={handlePrevClick} className={classes.navigation_arrow}>
        <img src={imgPrev} alt="prev" />
      </button>
      <div className={classes.navigation_btns}>{pages}</div>
      <button onClick={handleNextClick} className={classes.navigation_arrow}>
        <img src={imgNext} alt="next" />
      </button>
    </div>
  );
};
