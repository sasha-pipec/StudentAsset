import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
class PostsStore {
  posts = [];
  constructor() {
    makeAutoObservable(this);
  }

  getPosts = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://46.173.215.136/api/posts/?per_page=12`,
      {
        headers: new Headers({
          token: `${token}`,
        }),
        method: "GET",
      },
    );

    if (response.ok) {
      const { posts } = await response.json();

      this.posts = posts;
      console.log(posts);
      console.log("Посты получены");
    } else {
      // Обрабатываем ошибку авторизации
      console.log("error");
    }
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PostsStore();
