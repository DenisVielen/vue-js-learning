<template>
  <div id="app">
    <user-list
        :users="users"
        :current-date="currentDate"
    />
    <user-form @create="createUser"/>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import UserForm from "@/components/UserForm";
export default {
  components: {
    UserForm, UserList
  },

  name: 'App',
  data () {
    return {
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
      currentDate: null
    }
  },
  methods: {
    createUser(user) {
      this.users.unshift(user)
      this.currentDate = new Date()
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

</style>
