import React from "react";
import classes from "./PostItem.module.css";
export const PostItem = ({ index, img, title, date }) => {
  let url = `http://46.173.215.136/${img}`;
  let rootCl = [classes.item];

  if (index === 5) {
    rootCl = [classes.bigItem];
    console.log(index);
  }
  if (index === 10) {
    rootCl = [classes.bigItem_2];
    console.log(index);
  }
  const image = {
    backgroundImage: `url(${url})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className={rootCl.join(" ")}>
      <div style={image}></div>
      <p className={classes.date}>{date}</p>
      <p className={classes.title}>{title}</p>
    </div>
  );
};
