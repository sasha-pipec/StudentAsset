import React from "react";
import classes from "./EventPageSkeleton.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const EventPageSkeleton = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className={classes.wrapper}>
      <SkeletonTheme baseColor="#ededed" highlightColor="#f0f8ff">
        <div>
          <h1 className={classes.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
        </div>
        <div className={classes.swiper}>
          <Skeleton className={classes.calendar} />
        </div>
        <div className={classes.postlist}>
          {posts.map((posts, index) => {
            let rootCl = [classes.item];

            if (index === 5) {
              rootCl = [classes.bigItem];
            }
            if (index === 10) {
              rootCl = [classes.bigItem_2];
            }
            return (
              <Skeleton
                key={posts}
                className={rootCl}
                containerClassName={rootCl}
              />
            );
          })}
        </div>

        <Skeleton />
      </SkeletonTheme>
    </div>
  );
};

export default EventPageSkeleton;
