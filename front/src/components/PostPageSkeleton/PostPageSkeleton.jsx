import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import classes from "./PostPageSkeleton.module.css";
import store from "@/store/store";
const PostPageSkeleton = () => {
  return (
    <div className={classes.main}>
      <SkeletonTheme baseColor="#ededed" highlightColor="#f0f8ff">
        <div className={classes.imageContainer}>
          <Skeleton className={classes.skeletonImage} />
        </div>

        <div className={classes.titleContainer}>
          <p className={classes.date}>
            <Skeleton width={150} />
          </p>
          <h1 className={classes.title}>
            <Skeleton width={350} count={1} />
          </h1>
          <p className={classes.description}>
            <Skeleton className={classes.skeletonDescription} count={5} />
          </p>
          <Skeleton width={200} height={40} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default PostPageSkeleton;
