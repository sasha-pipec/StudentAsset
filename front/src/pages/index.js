import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EventItem } from "@/components/EventItem/EventItem";
import { SliderDrag } from "@/components/SliderPost/SliderDrag";
import { useEffect, useState } from "react";
import classes from "@/styles/pages/MainPage.module.css";
import plus from "@/assets/images/Plus.svg";
import minus from "@/assets/images/Minus.svg";
import store from "@/store/store";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    store.vote.getEvents(1);
  }, []);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <Head>
        <title>Коннект</title>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="ru" />
        <meta
          name="keywords"
          content="Коннект, connect, Connecting, connect.tgiek.ru, события в колледже, голосование, студенты, колледж, кампус, образование, развлечения, активности, участие, студенческая жизнь, голосование за события, студенческий совет, студенческие мероприятия"
        />
        <meta name="description" content="connect.tgiek.ru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <div className={classes.titleWrapper}>
            <h1 className={classes.titleText}>объединяем студентов</h1>
          </div>
        </div>
        <div className={classes.slider}>
          <h2>предстоящие события</h2>
          <SliderDrag count={3} />
        </div>
        <div className={classes.answersWrapper}>
          <div className={classes.answers}>
            <h2 className={classes.answersTitle}>
              Ответы на популярные вопросы
            </h2>
            <div className={classes.accordion}>
              <div className={classes.accordionItem}>
                <div
                  className={classes.accordionHeader}
                  onClick={() => handleClick(1)}>
                  <p>что такое коннект?</p>
                  {1 === activeIndex ? (
                    <img src={minus} alt="" />
                  ) : (
                    <img src={plus} alt="" />
                  )}
                </div>
                <div
                  className={
                    1 === activeIndex
                      ? classes.accordionContentShow
                      : classes.accordionContent
                  }>
                  это платформа, позволяющая студентам проводить время вместе.
                  благодаря возможности предлагать и голосовать за события вы
                  можете повлиять на внеучебную деятельсность множества
                  студентов
                </div>
              </div>
              <div className={classes.accordionItem}>
                <div
                  className={classes.accordionHeader}
                  onClick={() => handleClick(2)}>
                  <p>что такое коннект?</p>
                  {2 === activeIndex ? (
                    <img src={minus} alt="" />
                  ) : (
                    <img src={plus} alt="" />
                  )}
                </div>
                <div
                  className={
                    2 === activeIndex
                      ? classes.accordionContentShow
                      : classes.accordionContent
                  }>
                  это платформа, позволяющая студентам проводить время вместе.
                  благодаря возможности предлагать и голосовать за события вы
                  можете повлиять на внеучебную деятельсность множества
                  студентов
                </div>
              </div>
              <div className={classes.accordionItem}>
                <div
                  className={classes.accordionHeader}
                  onClick={() => handleClick(3)}>
                  <p>что такое коннект?</p>
                  {3 === activeIndex ? (
                    <img src={minus} alt="" />
                  ) : (
                    <img src={plus} alt="" />
                  )}
                </div>
                <div
                  className={
                    3 === activeIndex
                      ? classes.accordionContentShow
                      : classes.accordionContent
                  }>
                  это платформа, позволяющая студентам проводить время вместе.
                  благодаря возможности предлагать и голосовать за события вы
                  можете повлиять на внеучебную деятельсность множества
                  студентов
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.random}>
          <h2>голосование</h2>
          <Swiper
            navigation={true}
            spaceBetween={30}
            height={420}
            slidesPerView={1}
            className={classes.swiper}>
            {store.vote.VotePosts.map((el, index) => {
              return (
                <SwiperSlide key={el.id} className={classes.swiperSlide}>
                  <EventItem
                    key={index}
                    index={el.id}
                    img={el.image}
                    title={el.title}
                    date={el.date}
                    description={el.description}
                    total_votes={el.total_votes}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
