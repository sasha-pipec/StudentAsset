import React, { useState } from "react";
import classes from "./EventItem.module.css";
import store from "../../store/store";
export const EventItem = ({
  index,
  img,
  title,
  date,
  description,
  total_votes,
}) => {
  let url = `http://api.connect.tgiek.ru${img}`;
  let rootCl = [classes.item];
  const [isVisible, setVisible] = useState(true);
  if (isVisible === false) {
    rootCl.push(classes.hidden);
    console.log("скрыл");
  }
  function clickHendler(data) {
    if (store.user.isAuthenticated) {
      setVisible(false);
      store.vote.likeEvent(index, data);
    } else {
      alert("войдите в аккаунт!");
    }
  }

  function pluralizeLikes(count) {
    const lastDigit = count % 10;
    const isException = count >= 11 && count <= 14;
    if (lastDigit === 1 && !isException) {
      return "лайк";
    } else if ([2, 3, 4].includes(lastDigit) && !isException) {
      return "лайка";
    } else {
      return "лайков";
    }
  }
  return (
    <>
      {isVisible ? (
        <div className={rootCl}>
          <div className={classes.imageBackground}>
            <p className={classes.total_likes}>
              {total_votes} {pluralizeLikes(total_votes)}
            </p>
            <img src={url} alt="" className={classes.image} />
          </div>
          <div className={classes.text}>
            <p className={classes.title}>{title}</p>
            <p className={classes.description}>{description}</p>
            <div className={classes.btnsWrapper}>
              <button
                onClick={() => clickHendler("like")}
                className={classes.like}>
                Лайк
              </button>
              <button
                onClick={() => clickHendler("dislike")}
                className={classes.dislike}>
                Дизлайк
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
