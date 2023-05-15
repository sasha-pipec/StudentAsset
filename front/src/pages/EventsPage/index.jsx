import React, { useEffect, useState } from "react";
import { PostList } from "../../components/PostsList/PostList";
import classes from "./EventsPage.module.css";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import DatePicker from "../../components/DatePicker/DatePicker";
import { Layout } from "../../components/Layout/Layout";

const EventsPage = observer(() => {
  const [calendar, setCalendar] = useState([]);

  async function createCalendarArray() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const totalMonths = 3;
    const calendarArray = [];
    console.log(currentMonth);
    for (let i = 0; i < totalMonths; i++) {
      const month = new Date(currentYear, currentMonth + i);
      const monthYear = month.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      const totalDays = new Date(
        month.getFullYear(),
        month.getMonth() + 1,
        0,
      ).getDate();
      const monthArray = [];

      for (let j = 1; j <= totalDays; j++) {
        const date = new Date(month.getFullYear(), month.getMonth(), j);
        const isCurrentDay = date.toDateString() === today.toDateString();

        monthArray.push({
          date,
          isCurrentDay,
        });
      }

      calendarArray.push({
        month: monthYear,
        days: monthArray,
      });
    }
    setCalendar(calendarArray);

    return calendarArray;
  }

  const CreateCalendar = async () => {
    await store.posts.getPostDate();
    createCalendarArray();
  };

  useEffect(() => {
    CreateCalendar();
    store.posts.singlePostIsLiked = "";
  }, []);
  console.log(calendar);

  return (
    <Layout>
      <div className={classes.wrapper}>
        <div>
          <h1 className={classes.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
        </div>
        {calendar.length !== 0 && (
          <>
            <Swiper
              spaceBetween={10}
              slidesPerView={"auto"}
              height={100}
              modules={[Navigation]}
              navigation={true}>
              {calendar.map((month, monthIndex) =>
                month.days.map((day, dayIndex) => {
                  const findEvent = store.posts.datePosts.find((elem) => {
                    let elemDate = new Date(elem.date);

                    if (
                      elemDate.getDate() === day.date.getDate() &&
                      elemDate.getMonth() === day.date.getMonth()
                    ) {
                      console.log(elem.date, new Date(elem.date));
                      console.log(day.date, day.date.getDate());
                      return true;
                    }
                    return false;
                  });
                  console.log(findEvent);
                  // console.log(dayIndex);
                  if (month.days.length === dayIndex - 1) {
                    console.log(dayIndex - 1, day);
                  }
                  if (dayIndex === 0) {
                    console.log(
                      "daddadad",
                      day.date.toLocaleString("default", { month: "long" }),
                      day,
                    );
                  }
                  return (
                    <SwiperSlide
                      style={
                        month.days.length === dayIndex + 1
                          ? findEvent
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
                          : findEvent
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
                      className={findEvent ? classes.active : classes.disable}
                      key={`${monthIndex}-${dayIndex}`}>
                      {dayIndex === 0 ? (
                        <p className={classes.calendarMonth}>
                          {day.date.toLocaleString("default", {
                            month: "long",
                          })}
                        </p>
                      ) : (
                        ""
                      )}
                      <DatePicker
                        disabled={findEvent}
                        id={dayIndex}
                        date={day.date}
                      />
                    </SwiperSlide>
                  );
                }),
              )}
            </Swiper>
          </>
        )}

        <PostList></PostList>
      </div>
    </Layout>
  );
});
export { EventsPage };
