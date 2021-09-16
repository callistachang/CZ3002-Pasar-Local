import { makeAutoObservable } from "mobx"

class Store {
  loggedInProfile = null
  constructor() {
    makeAutoObservable(this)
  }
}

const store = new Store()

export default store
