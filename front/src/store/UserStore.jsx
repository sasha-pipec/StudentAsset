import { makeAutoObservable, configure } from "mobx";
import axiosConfig from "../utils/axiosConfig";
import store from "./store";
configure({
  enforceActions: "never",
});

export class UserStore {
  username = "";
  token = "";
  first_name = "";
  isAuthenticated = false;
  role = "";
  constructor() {
    makeAutoObservable(this);
  }

  login = async (username, password, get_token) => {
    const params = new URLSearchParams();
    params.append("username", `${username}`);
    params.append("password", `${password}`);
    const response = await axiosConfig().get(
      `users/login/?${params.toString()}`,
    );

    if (response.status === 200) {
      const { username, API_Key, first_name, last_name, role } =
        await response.data;
      this.isAuthenticated = true;
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.token = API_Key;
      this.role = role;
      if (get_token) {
        localStorage.setItem("token", this.token);
      }
      console.log("Авторизация прошла успешно");
      store.modal.setVisible(false);
    } else {
      alert("Неверные учетные данные");
    }
  };
  auth = async () => {
    const token = localStorage.getItem("token");
    if (token !== null && store.user.isAuthenticated === false) {
      const response = await axiosConfig().get(`users/auth/?API_Key=${token}`);
      if (response.status === 200) {
        const { username, API_Key, first_name, last_name, role } =
          await response.data;
        this.isAuthenticated = true;
        this.username = username;
        this.first_name = first_name;
        this.role = role;
        this.last_name = last_name;
        this.token = API_Key;

        console.log("Аутентификация прошла успешно!");
      } else {
        alert("Зайдите еще раз!");
      }
    } else {
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
