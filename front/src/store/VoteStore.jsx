import { makeAutoObservable, configure } from "mobx";

import axiosConfig from "../utils/axiosConfig";
import store from "./store";
configure({
  enforceActions: "never",
});
export class VoteStore {
  VotePosts = [];
  pages = [];
  CurrentPage = "";
  urlImage = "";
  constructor() {
    makeAutoObservable(this);
  }
  getEvents = async (page) => {
    this.CurrentPage = page;
    let token = localStorage.getItem("token");
    if (token === null) {
      token = "";
    }

    const response = await axiosConfig().get(
      `events/?token=${token}&per_page=999`,
    );
    if (response.status === 200) {
      const { Event, page_data } = response.data;
      let page_data_new = page_data
        .replace(/[/"]/g, "")
        .replace("[", "")
        .replace("]", "")
        .replace(/[ ]/g, "");

      let arr_pages = page_data_new.split(",");
      this.pages = arr_pages;
      this.VotePosts = Event;
      console.log("Посты получены");
      console.log(this.VotePosts, this.pages);
    } else {
      console.log("error");
    }
  };

  likeEvent = async (id, like) => {
    console.log(id, like);
    if (store.user.isAuthenticated) {
      const data = { vote: `${like}` };
      console.log(data);
      try {
        await axiosConfig().post(`events/${id}/vote/`, data);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Войдите в аккаунт!");
    }
  };

  datePost = (datePost) => {
    const date = new Date(datePost);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear().toString()}`;
    const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    const formattedDateTime = `${formattedDate} / ${formattedTime}`;
    return formattedDateTime;
  };

  createEvent = async (data, imageData) => {
    console.log(imageData.get("image"));
    if (store.user.isAuthenticated) {
      try {
        await axiosConfig().post(`events/`, imageData);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Войдите в аккаунт!");
    }
  };
}
