import React from "react";
import classes from "./Slider.module.css";
import store from "../../store/store";
import Link from "next/link";
export const SliderItem = ({ img, title, date, to }) => {
  let url = `http://api.connect.tgiek.ru${img}`;
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
    <Link
      href="/"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={classes.item}>
      <div className={classes.imageBackground}>
        <div className={classes.image} style={image}></div>
      </div>
      <p className={classes.date}>{store.posts.datePost(date)}</p>
      <p className={classes.title}>{title}</p>
    </Link>
  );
};
