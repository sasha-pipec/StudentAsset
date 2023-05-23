import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "../../styles/pages/SinglePostPage.module.css";
import { observer } from "mobx-react-lite";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { SliderDrag } from "../../components/SliderPost/SliderDrag";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import store from "../../store/store";
import PostPageSkeleton from "@/components/PostPageSkeleton/PostPageSkeleton";
const SinglePostPage = observer(() => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const getPost = async () => {
      store.posts.singlePost = [];
      const { id } = router.query;
      if (id !== undefined) {
        await store.posts.getSinglePost(id);
      }
    };
    getPost();
  }, [router.query]);
  const url = store.posts.urlImage;

  const image = {
    backgroundImage: `url(${url})`,
    width: "568px",
    height: "660px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "transform 0.2s ease-in-out",
  };
  return (
    <>
      <div>
        <div className={classes.wrapper}>
          {store.posts.singlePost.date !== undefined ? (
            <div className={classes.main}>
              <div className={classes.imageContainer}>
                <div className={classes.imageBackground}>
                  <img src={url} className={classes.image} alt="" />
                </div>
              </div>

              <div className={classes.titleContainer}>
                <p className={classes.date}>
                  {store.posts.datePost(store.posts.singlePost.date)}
                </p>
                <h1 className={classes.title}>
                  {store.posts.singlePost.title}
                </h1>
                <p className={classes.description}>
                  {store.posts.singlePost.description}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, corporis dolor? Dolor temporibus ullam facere enim
                  reprehenderit commodi numquam deleniti consequatur ratione?
                  Rem corrupti iusto et sapiente ipsa autem voluptatum?
                </p>
                <ButtonLike id={id}></ButtonLike>
              </div>
            </div>
          ) : (
            <PostPageSkeleton />
          )}

          <div className={classes.slider}>
            <SliderDrag count={4}></SliderDrag>
          </div>
        </div>
      </div>
    </>
  );
});

export default SinglePostPage;
