<template>
  <div id="app">
    <user-list
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
  data (){
    return {
      currentDate: null
    }
  },
  computed: {
  },
  methods: {
    createUser(currentDate) {
      this.currentDate = currentDate
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
