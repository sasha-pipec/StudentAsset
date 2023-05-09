import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./SinglePostPage.module.css";
import { observer } from "mobx-react-lite";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { SliderDrag } from "../../components/SliderPost/SliderDrag";
import store from "../../store/store";
const SinglePostPage = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    const getPost = async () => {
      await store.posts.getSinglePost(id);
    };
    getPost();
  }, [id]);
  const url = store.posts.urlImage;

  return (
    <div className={classes.wrapper}>
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
          <h1 className={classes.title}>{store.posts.singlePost.title}</h1>
          <p className={classes.description}>
            {store.posts.singlePost.description}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolor? Dolor temporibus ullam facere enim reprehenderit
            commodi numquam deleniti consequatur ratione? Rem corrupti iusto et
            sapiente ipsa autem voluptatum?
          </p>
          <ButtonLike id={id}></ButtonLike>
        </div>
      </div>
      <div className={classes.slider}>
        <p className={classes.sliderTitle}>МОЖЕТ ПОНРАВИТЬСЯ</p>
        <SliderDrag count={4}></SliderDrag>
      </div>
    </div>
  );
});

export { SinglePostPage };
