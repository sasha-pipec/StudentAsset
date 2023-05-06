import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
export class UserModalStore {
  visible = false;
  constructor() {
    makeAutoObservable(this);
  }
  setVisible(value) {
    this.visible = value;
  }
  changeVisible() {
    this.visible = !this.visible;
  }
}
