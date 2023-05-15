import React from "react";
import classes from "./PostItem.module.css";
import store from "../../store/store";
import Link from "next/link";
export const PostItem = ({ index, img, title, date, to }) => {
  let url = `http://api.connect.tgiek.ru${img}`;
  let rootCl = [classes.item];

  if (index === 5) {
    rootCl = [classes.bigItem];
  }
  if (index === 10) {
    rootCl = [classes.bigItem_2];
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
    // to={`/posts/${to}`}
    <Link href="/" className={rootCl.join(" ")}>
      <div className={classes.imageBackground}>
        <div className={classes.image} style={image}></div>
      </div>
      <p className={classes.date}>{store.posts.datePost(date)}</p>
      <p className={classes.title}>{title}</p>
    </Link>
  );
};
