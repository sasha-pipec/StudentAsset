import { useEffect, useState } from "react";
import { PostList } from "../../components/PostsList/PostList";
import classes from "./EventsPage.module.css";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import DatePicker from "../../components/DatePicker/DatePicker";
import { Layout } from "../../components/Layout/Layout";
import EventPageSkeleton from "@/components/EventPageSkeleton/EventPageSkeleton";

const EventsPage = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  const CreateCalendar = async () => {
    await store.posts.getPostDate();
    setIsLoading(false);
  };
  let page = 1;
  useEffect(() => {
    const getPosts = async () => {
      store.posts.isLoading = true;
      await store.posts.getPosts(page);
      store.posts.isLoading = false;
      store.posts.singlePost = [];
      store.posts.singlePostIsLiked = undefined;
    };
    getPosts();
  }, []);
  useEffect(() => {
    CreateCalendar();
    store.posts.singlePostIsLiked = "";
  }, []);
  console.log(store.posts.isLoading);
  return (
    <>
      {store.posts.isLoading === false ? (
        <div className={classes.wrapper}>
          <div>
            <h1 className={classes.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
          </div>
          {store.posts.calendar.length !== 0 && (
            <div className={classes.swiper}>
              <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                height={100}
                modules={[Navigation]}
                navigation={true}>
                {store.posts.calendar.map((month, monthIndex) =>
                  month.days.map((day, dayIndex) => {
                    return (
                      <SwiperSlide
                        style={
                          month.days.length === dayIndex + 1
                            ? day.isActive
                              ? {
                                  height: "86px",
                                  minWidth: "100px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                }
                              : {
                                  height: "86px",
                                  minWidth: "100px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                  opacity: 0.6,
                                }
                            : day.isActive
                            ? {
                                height: "86px",
                                maxWidth: "31px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                              }
                            : {
                                height: "86px",
                                maxWidth: "31px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                opacity: 0.6,
                              }
                        }
                        className={
                          day.isActive ? classes.active : classes.disable
                        }
                        key={`${monthIndex}-${dayIndex}`}>
                        {dayIndex === 0 ? (
                          <p className={classes.calendarMonth}>
                            {new Date(day.date).toLocaleString(undefined, {
                              month: "long",
                            })}
                          </p>
                        ) : (
                          ""
                        )}
                        <DatePicker
                          disabled={day.isActive}
                          id={day.date}
                          date={day.date}
                        />
                      </SwiperSlide>
                    );
                  }),
                )}
              </Swiper>
            </div>
          )}

          <PostList></PostList>
        </div>
      ) : (
        <EventPageSkeleton></EventPageSkeleton>
      )}
    </>
  );
});
export default EventsPage;
