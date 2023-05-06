import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
export class LikeToggleStore {
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
