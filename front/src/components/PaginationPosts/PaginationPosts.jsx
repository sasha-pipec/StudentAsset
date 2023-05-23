import React, { useEffect } from "react";
import classes from "./PaginationPosts.module.css";
import imgPrev from "../../assets/images/arrow_prev.svg";
import imgNext from "../../assets/images/arrow_next.svg";
import store from "../../store/store";
import Image from "next/image";
export const PaginationPosts = () => {
  const pageCount = store.posts.pages.length;

  const handleClick = async (page) => {
    store.posts.isLoading = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    await store.posts.getPosts(page);
    store.posts.isLoading = false;
  };

  const handlePrevClick = async () => {
    const page = store.posts.CurrentPage > 1 ? store.posts.CurrentPage - 1 : 1;
    store.posts.isLoading = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    await store.posts.getPosts(page);
    store.posts.isLoading = false;
  };

  const handleNextClick = async () => {
    const page =
      store.posts.CurrentPage < pageCount
        ? store.posts.CurrentPage + 1
        : pageCount;
    store.posts.isLoading = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    await store.posts.getPosts(page);
    store.posts.isLoading = false;
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
        <Image src={imgPrev} alt="" />
      </button>
      <div className={classes.navigation_btns}>{pages}</div>
      <button onClick={handleNextClick} className={classes.navigation_arrow}>
        <Image src={imgNext} alt="" />
      </button>
    </div>
  );
};
