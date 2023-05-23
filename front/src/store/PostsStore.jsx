import { makeAutoObservable, configure } from "mobx";
import axiosConfig from "../utils/axiosConfig";
import store from "./store";
configure({
  enforceActions: "never",
});
export class PostsStore {
  posts = [];
  pages = [];
  postSlider = [];
  datePosts = [];
  currentPosts = [];
  singlePost = [];
  CurrentPage = "";
  calendar = [];
  singlePostIsLiked = "";
  urlImage = "";
  isLoading = "";
  constructor() {
    makeAutoObservable(this);
  }
  getPosts = async (page) => {
    this.CurrentPage = page;
    const response = await axiosConfig().get(`posts/?per_page=12&page=${page}`);
    if (response.status === 200) {
      const { posts, page_data, date } = response.data;
      let page_data_new = page_data
        .replace(/[/"]/g, "")
        .replace("[", "")
        .replace("]", "")
        .replace(/[ ]/g, "");
      let arr_pages = page_data_new.split(",");
      this.pages = arr_pages;
      this.posts = posts;
      this.currentPosts = posts;
      this.calendar = date;
      console.log("Посты получены");
    } else {
      console.log("error");
    }
    console.log(this.posts);
  };
  getPostSlider = async () => {
    const response = await axiosConfig().get(`posts/?per_page=10&page=1`);
    if (response.status === 200) {
      const { posts } = response.data;

      this.postSlider = posts;
      console.log("Посты получены");
    } else {
      console.log("error");
    }
    console.log(this.postSlider);
  };
  getPostDate = async () => {
    const response = await axiosConfig().get(`posts/?per_page=999&page=1`);
    if (response.status === 200) {
      const { posts } = response.data;
      this.datePosts = posts;
    } else {
      console.log("error");
    }
  };
  getSinglePost = async (id) => {
    const response = await axiosConfig().get(`posts/${id}/`);
    if (response.status === 200) {
      const { post } = response.data;
      this.singlePost = post;
      console.log("Пост получен");

      const img = this.singlePost.image;
      this.urlImage = `http://api.connect.tgiek.ru/${img}`;
    } else {
      console.log("error");
    }
    if (store.user.isAuthenticated) {
      const token = store.user.token;
      const responseLike = await axiosConfig().get(
        `posts/${id}/like/?token=${token}`,
      );
      if (responseLike.status === 200) {
        console.log("лайк получен");

        const { INFO } = await responseLike.data;
        this.singlePostIsLiked = INFO;
        if (INFO) {
          console.log("лайкнут");
          store.likeToggle.setLike(true);
        } else {
          console.log("дислайкнут");
          store.likeToggle.setLike(false);
        }
      } else {
        console.log(responseLike);
      }
    }
  };
  unlikePost = async (id) => {
    if (store.user.isAuthenticated) {
      try {
        await axiosConfig().delete(`posts/${id}/like_toggle/`);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Войдите в аккаунт!");
    }
  };

  likePost = async (id) => {
    if (store.user.isAuthenticated) {
      try {
        await axiosConfig().post(`posts/${id}/like_toggle/`);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Войдите в аккаунт!");
    }
  };
  setPosts = (posts) => {
    this.posts = posts;
  };
  setCurrentPosts = (posts) => {
    this.currentPosts = posts;
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
  setIsLoading = (value) => {
    this.isLoading = value;
  };
}
