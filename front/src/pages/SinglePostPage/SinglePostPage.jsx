import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostsStore from "../../store/PostsStore";
import classes from "./SinglePostPage.module.css";
import { observer } from "mobx-react-lite";
import { ButtonLike } from "../../components/ButtonLike/ButtonLike";
import { SliderDrag } from "../../components/SliderPost/SliderDrag";
const SinglePostPage = observer(() => {
  const { id } = useParams();
  useEffect(() => {
    const getPost = async () => {
      await PostsStore.getSinglePost(id);
    };
    getPost();
  }, [id]);
  const url = PostsStore.urlImage;

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
          <div className={classes.main}>
            <div className={classes.imageBackground}>
              <div style={image}> </div>
            </div>
            <div className={classes.titleContainer}>
              <p className={classes.date}>
                {PostsStore.datePost(PostsStore.singlePost.date)}
              </p>
              <h1 className={classes.title}>{PostsStore.singlePost.title}</h1>
              <p className={classes.description}>
                {PostsStore.singlePost.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, corporis dolor? Dolor temporibus ullam facere enim
                reprehenderit commodi numquam deleniti consequatur ratione? Rem
                corrupti iusto et sapiente ipsa autem voluptatum?
              </p>
              <ButtonLike id={id}></ButtonLike>
            </div>
          </div>
          <div className={classes.slider}>
            <SliderDrag></SliderDrag>
          </div>
        </div>
      </div>
    </>
  );
});

export { SinglePostPage };
