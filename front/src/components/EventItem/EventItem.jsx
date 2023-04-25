import React, { useState } from "react";
import classes from "./EventItem.module.css";
import VoteStore from "../../store/VoteStore";
export const EventItem = ({ index, img, title, date, description }) => {
  let url = `http://api.connect.tgiek.ru${img}`;
  let rootCl = [classes.item];
  const [isVisible, setVisible] = useState(true);
  if (isVisible === false) {
    rootCl.push(classes.hidden);
    console.log("скрыл");
  }
  function clickHendler(data) {
    setVisible(false);
    console.log(isVisible);
    VoteStore.likeEvent(index, data);
  }
  const image = {
    backgroundImage: `url(${url})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <>
      {isVisible ? (
        <div className={rootCl}>
          <div className={classes.imageBackground}>
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
