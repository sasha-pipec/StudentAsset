import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
class ModalStore {
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
// eslint-disable-next-line import/no-anonymous-default-export
export default new ModalStore();
