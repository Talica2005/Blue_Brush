import { makeAutoObservable } from "mobx";

export default class UserStore {
  //constructor is called when an object of this class is created
  constructor() {
    this._isAuth = false;
    this._user = {};
    // makeAutoObservable monitors changes in variables
    makeAutoObservable(this);
  }
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}