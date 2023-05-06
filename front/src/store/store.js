import { LikeToggleStore } from "./LikeToggleStore";
import { ModalStore } from "./ModalStore";
import { PostsStore } from "./PostsStore";
import { UserModalStore } from "./UserModalStore";
import { UserStore } from "./UserStore";
import { VoteStore } from "./VoteStore";

class Store {
  constructor() {
    this.user = new UserStore();
    this.vote = new VoteStore();
    this.posts = new PostsStore();
    this.modal = new ModalStore();
    this.userModal = new UserModalStore();
    this.likeToggle = new LikeToggleStore();
  }
}
const store = new Store();
export default store;
