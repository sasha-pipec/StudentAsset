import React, { useEffect } from "react";
import PostsStore from "../../store/PostsStore";
import classes from "./PaginationPosts.module.css";
import imgPrev from "../../images/arrow_prev.svg";
import imgNext from "../../images/arrow_next.svg";
export const PaginationPosts = () => {
  const pageCount = PostsStore.pages.length;
  const handleClick = (page) => {
    PostsStore.getPosts(page);
  };
  const handlePrevClick = () => {
    const page = PostsStore.CurrentPage > 1 ? PostsStore.CurrentPage - 1 : 1;
    PostsStore.getPosts(page);
  };

  const handleNextClick = () => {
    const page =
      PostsStore.CurrentPage < pageCount
        ? PostsStore.CurrentPage + 1
        : pageCount;
    PostsStore.getPosts(page);
  };
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    //доделать компонент
    pages.push(
      <button
        className={PostsStore.currentPage === i ? classes.active : classes.btn}
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
