import { makeAutoObservable, configure } from "mobx";
import ModalStore from "./ModalStore";
configure({
  enforceActions: "never",
});
class UserStore {
  username = "";
  token = "";
  first_name = "";
  isAuthenticated = false;
  role = "";
  constructor() {
    makeAutoObservable(this);
  }

  login = async (username, password, get_token) => {
    const response = await fetch(
      `http://46.173.215.136/api/users/login/?username=${username}&password=${password}`,
      {
        method: "GET",
      },
    );

    if (response.ok) {
      const { username, API_Key, first_name, last_name } =
        await response.json();
      this.isAuthenticated = true;
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.token = API_Key;
      if (get_token) {
        localStorage.setItem("token", this.token);
      }
      console.log("Авторизация прошла успешно");
      ModalStore.setVisible(false);
    } else {
      // Обрабатываем ошибку авторизации
      alert("Неверные учетные данные");
    }
  };
  auth = async (token) => {
    const response = await fetch(
      `http://46.173.215.136/api/users/auth/?API_Key=${token}`,
      {
        headers: new Headers({
          token: `${token}`,
        }),
        method: "GET",
      },
    );
    if (response.ok) {
      const { username, API_Key, first_name, last_name, role } =
        await response.json();
      this.isAuthenticated = true;
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.token = API_Key;
      this.role = role;
      console.log("Аутентификация прошла успешно!");
    } else {
      alert("Зайдите еще раз!");
    }
  };
  logout = () => {
    this.isAuthenticated = false;
    this.username = "";
    this.token = "";
    localStorage.removeItem("token");
    console.log("Пользователь вышел");
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserStore();
