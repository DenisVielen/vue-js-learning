import { createStore } from 'vuex'
import {userListModule} from "@/store/userListModule";

export default createStore({
  modules: {
    users: userListModule
  }
})
