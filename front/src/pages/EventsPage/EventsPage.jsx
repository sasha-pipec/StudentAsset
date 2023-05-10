import React, { useEffect, useState } from "react";
import { PostList } from "../../components/PostsList/PostList";
import classes from "./EventsPage.module.css";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
const EventsPage = observer(() => {
  const [calendar, setCalendar] = useState([]);
  function createCalendarArray() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const totalMonths = 13;
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

  useEffect(() => {
    createCalendarArray();
    store.posts.singlePostIsLiked = "";
  }, []);
  console.log(calendar);
  return (
    <div className={classes.wrapper}>
      {calendar.length !== 0 && (
        <>
          <p>слайдер</p>
          <Swiper spaceBetween={10} slidesPerView={15} height={100} navigation>
            {calendar.map((month, monthIndex) =>
              month.days.map((day, dayIndex) => (
                <SwiperSlide key={`${monthIndex}-${dayIndex}`}>
                  {day.date.toLocaleString("en-US", { day: "numeric" })}
                  {month.month}
                </SwiperSlide>
              )),
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
