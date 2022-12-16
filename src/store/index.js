import { createStore } from 'vuex'
export default createStore({
  state: () => ({
    users: [
      {
        name: 'Denis',
        avatar: 'http://i.imgur.com/OvflPTZ.jpg'
      },
      {
        name: 'Lenis',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg'
      },
      {
        name: 'Robin',
        avatar: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg'
      }
    ],
  }),
  getters: {
    GET_USERS (state) {
      return state.users
    }
  },
  mutations: {
    CREATE_USER (state, payload) {
      state.users.unshift(payload.user)
    }
  },
})
