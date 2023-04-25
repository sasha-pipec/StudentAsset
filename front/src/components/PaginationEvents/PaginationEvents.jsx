import React, { useEffect } from "react";
import classes from "./Pagination.module.css";
import imgPrev from "../../images/arrow_prev.svg";
import imgNext from "../../images/arrow_next.svg";
import VoteStore from "../../store/VoteStore";
export const PaginationEvents = () => {
  const pageCount = VoteStore.pages.length;
  const handleClick = (page) => {
    if (VoteStore.CurrentPage !== page) {
      VoteStore.getEvents(page);
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };
  const handlePrevClick = () => {
    if (VoteStore.CurrentPage > 1) {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }

    const page = VoteStore.CurrentPage > 1 ? VoteStore.CurrentPage - 1 : 1;
    VoteStore.getEvents(page);
  };

  const handleNextClick = () => {
    if (VoteStore.CurrentPage < pageCount) {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }

    const page =
      VoteStore.CurrentPage < pageCount ? VoteStore.CurrentPage + 1 : pageCount;
    VoteStore.getEvents(page);
  };
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    //доделать компонент
    pages.push(
      <button
        className={VoteStore.currentPage === i ? classes.active : classes.btn}
        key={i}
        onClick={() => handleClick(i)}>
        {i}
      </button>,
    );
  }
  return (
    <div className={classes.navigationBar}>
      <button onClick={handlePrevClick} className={classes.navigationArrow}>
        <img src={imgPrev} alt="prev" />
      </button>
      <div className={classes.navigationBtns}>{pages}</div>
      <button onClick={handleNextClick} className={classes.navigationArrow}>
        <img src={imgNext} alt="next" />
      </button>
    </div>
  );
};
