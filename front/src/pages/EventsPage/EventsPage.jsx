import React, { useEffect, useState } from "react";
import { PostList } from "../../components/PostsList/PostList";
import classes from "./EventsPage.module.css";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "../../components/DatePicker/DatePicker";
const EventsPage = observer(() => {
  const [calendar, setCalendar] = useState([]);
  const [dateEvent, setDateEvent] = useState([]);
  async function createCalendarArray() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const totalMonths = 3;
    const calendarArray = [];

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
    let datePosts = [];
    setDateEvent(datePosts);
    createCalendarArray();
  };

  useEffect(() => {
    CreateCalendar();
    store.posts.singlePostIsLiked = "";
  }, []);
  console.log(calendar);

  return (
    <div className={classes.wrapper}>
      {calendar.length !== 0 && (
        <>
          <p>слайдер</p>
          <Swiper spaceBetween={8} slidesPerView={15} height={100} navigation>
            {calendar.map((month, monthIndex) =>
              month.days.map((day, dayIndex) => {
                const findEvent = store.posts.datePosts.find((elem) => {
                  let elemDate = new Date(elem.date);
                  console.log(elemDate.getDate());
                  if (
                    elemDate.getDate() === day.date.getDate() &&
                    elemDate.getMonth() === day.date.getMonth()
                  ) {
                    console.log(elemDate.getDate(), "ada");
                    return true;
                  }
                });
                return (
                  <SwiperSlide
                    style={
                      findEvent
                        ? {
                            height: "86px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }
                        : {
                            height: "86px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            opacity: 0.3,
                          }
                    }
                    className={findEvent ? classes.active : classes.disable}
                    key={`${monthIndex}-${dayIndex}`}>
                    {dayIndex === 0 ? (
                      <p>
                        {day.date.toLocaleString("default", { month: "long" })}
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

      <div>
        <h1 className={classes.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
      </div>
      <PostList></PostList>
    </div>
  );
});
export { EventsPage };
