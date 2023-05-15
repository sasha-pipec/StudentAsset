import { LikeToggleStore } from "./LikeToggleStore";
import { ModalStore } from "./ModalStore";
import { PostsStore } from "./PostsStore";
import { UserModalStore } from "./UserModalStore";
import { UserStore } from "./UserStore";
import { VoteStore } from "./VoteStore";
import { PickedToggleStore } from "./pickerToggleStore";

class Store {
  constructor() {
    this.user = new UserStore();
    this.vote = new VoteStore();
    this.posts = new PostsStore();
    this.modal = new ModalStore();
    this.userModal = new UserModalStore();
    this.likeToggle = new LikeToggleStore();
    this.PickedDate = new PickedToggleStore();
  }
}
const store = new Store();
export default store;
