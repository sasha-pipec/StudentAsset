import React, { useEffect } from "react";
import { SliderItem } from "./SliderItem";
import { useState } from "react";
import PostsStore from "../../store/PostsStore";
import classes from "./Slider.module.css";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import store from "../../store/store";
export const SliderDrag = observer(({ count }) => {
  useEffect(() => {
    store.posts.getPostSlider();
  }, []);
  console.log(store.posts.postSlider);
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={30}
        height={420}
        slidesPerView={count}
        className={classes.swiper}>
        {store.posts.postSlider.map((el) => {
          return (
            <SwiperSlide key={el.id} className={classes.swiperSlide}>
              <SliderItem
                img={el.image}
                title={el.title}
                date={el.date}
                to={el.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
});
