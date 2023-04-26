import { makeAutoObservable, configure } from "mobx";
import UserStore from "./UserStore";
import LikeToggleStore from "./LikeToggleStore";
import axios from "axios";
configure({
  enforceActions: "never",
});
class VoteStore {
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

    const response = await axios.get(
      `http://api.connect.tgiek.ru/api/events/?token=${token}&per_page=999`,
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
    if (UserStore.isAuthenticated) {
      const data = { vote: `${like}` };
      console.log(data);
      try {
        await axios.post(
          `http://api.connect.tgiek.ru/api/events/${id}/vote/`,
          data,
          {
            headers: {
              token: UserStore.token,
              "Content-Type": "multipart/form-data",
            },
          },
        );
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
    if (UserStore.isAuthenticated) {
      try {
        await axios.post(
          `http://api.connect.tgiek.ru/api/events/`,

          imageData,

          {
            headers: {
              token: UserStore.token,
              "Content-Type": "multipart/form-data",
            },
          },
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Войдите в аккаунт!");
    }
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new VoteStore();
