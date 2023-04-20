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
  singlePost = [];
  singlePostIsLiked = "";
  urlImage = "";
  postSlider = [];
  constructor() {
    makeAutoObservable(this);
  }
  getPosts = async (page) => {
    this.CurrentPage = page;
    const response = await axios.get(
      `http://api.connect.tgiek.ru/api/posts/?per_page=12&page=${page}`,
    );
    if (response.status === 200) {
      const { posts, page_data } = response.data;
      let page_data_new = page_data
        .replace(/[/"]/g, "")
        .replace("[", "")
        .replace("]", "")
        .replace(/[ ]/g, "");

      let arr_pages = page_data_new.split(",");
      this.pages = arr_pages;
      this.posts = posts;
      console.log("Посты получены");
    } else {
      console.log("error");
    }
    console.log(this.posts);
  };
  getPostSlider = async () => {
    const response = await axios.get(
      `http://api.connect.tgiek.ru/api/posts/?per_page=10&page=1`,
    );
    if (response.status === 200) {
      const { posts } = response.data;

      this.postSlider = posts;
      console.log("Посты получены");
    } else {
      console.log("error");
    }
    console.log(this.postSlider);
  };
  getSinglePost = async (id) => {
    const response = await axios.get(
      `http://api.connect.tgiek.ru/api/posts/${id}/`,
    );
    if (response.status === 200) {
      const { post } = response.data;
      this.singlePost = post;
      console.log("Пост получен");

      const img = this.singlePost.image;
      this.urlImage = `http://api.connect.tgiek.ru/${img}`;
    } else {
      console.log("error");
    }
    if (UserStore.isAuthenticated) {
      const token = UserStore.token;
      const responseLike = await axios.get(
        `http://api.connect.tgiek.ru/api/posts/${id}/like/?token=${token}`,
      );
      if (responseLike.status === 200) {
        console.log("лайк получен");

        const { INFO } = await responseLike.data;
        this.singlePostIsLiked = INFO;
        if (INFO) {
          console.log("лайкнут");
          LikeToggleStore.setLike(true);
        } else {
          console.log("дислайкнут");
          LikeToggleStore.setLike(false);
        }
      } else {
        console.log(responseLike);
      }
    }
  };
  unlikePost = async (id) => {
    if (UserStore.isAuthenticated) {
      try {
        await axios.delete(
          `http://api.connect.tgiek.ru/api/posts/${id}/like_toggle/`,
          {
            headers: {
              token: UserStore.token,
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

  likePost = async (id) => {
    if (UserStore.isAuthenticated) {
      try {
        await axios.post(
          `http://api.connect.tgiek.ru/api/posts/${id}/like_toggle/`,
          null,
          {
            headers: {
              token: UserStore.token,
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
