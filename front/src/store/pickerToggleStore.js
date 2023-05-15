import { makeAutoObservable, configure } from "mobx";
configure({
  enforceActions: "never",
});
export class PickedToggleStore {
  pickedId = undefined;
  constructor() {
    makeAutoObservable(this);
  }
  setPickedId(value) {
    this.pickedId = value;
  }
}
