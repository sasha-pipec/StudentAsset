import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
class likeToggleStore {
  isLiked = false;
  constructor() {
    makeAutoObservable(this);
  }
  setLike(value) {
    this.isLiked = value;
  }
  changeValue() {
    this.isLiked = !this.isLiked;
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new likeToggleStore();
