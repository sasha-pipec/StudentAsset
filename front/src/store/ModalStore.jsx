import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
export class ModalStore {
  visible = false;
  burgervisible = false;
  constructor() {
    makeAutoObservable(this);
  }
  setVisible(value) {
    this.visible = value;
  }
  setVisibleBurger(value) {
    this.burgervisible = value;
  }
  changeVisibleburger(value) {
    this.burgervisible = !this.burgervisible;
  }
  changeVisible() {
    this.visible = !this.visible;
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
// export default new ModalStore();
