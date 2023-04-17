import { makeAutoObservable, configure } from "mobx";
import ModalStore from "./ModalStore";
import axios from "axios";
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
    const params = new URLSearchParams();
    params.append("username", `${username}`);
    params.append("password", `${password}`);
    const response = await axios.get(
      `http://46.173.215.136/api/users/login/?${params.toString()}`,
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
      ModalStore.setVisible(false);
    } else {
      alert("Неверные учетные данные");
    }
  };
  auth = async (token) => {
    const response = await axios.get(
      `http://46.173.215.136/api/users/auth/?API_Key=${token}`,
      {
        headers: {
          token: `${token}`,
        },
      },
    );
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
