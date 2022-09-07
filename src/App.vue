<template>
  <div id="app">
    <div class="slider">
      <div>
        <img class="avatar" v-bind:src="showUser.avatar" alt="">
        <p> Ім'я: {{ showUser.name }} </p>
      </div>
      <button
          :disabled="disabledPrev"
          @click="prevUser"
          class="btn"
          type="button"
      >Попередній
      </button>
      <button
          :disabled="disabledNext"
          @click="nextUser"
          class="btn"
          type="button"
      >Наступний
      </button>
    </div>

    <form class="form" @submit.prevent>
      <input
          v-bind:value="name"
          @input="name = $event.target.value"
          type="text"
          placeholder="Введіть ім'я">
      <textarea
          v-bind:value="avatar"
          @input="avatar = $event.target.value"
          placeholder="Додайте фото"
      >
      </textarea>
      <button @click="createUser" type="submit">Створити</button>
    </form>
  </div>
</template>

<script>

export default {
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
      name: '',
      avatar: '',

      userCounter: 0,
      disabledNext: false,
      disabledPrev: false
    }
  },
  computed: {
    showUser () {
      return this.users.find((user, index) => {
        return index === this.userCounter
      })
    },
  },
  methods: {
    createUser () {
      const newUser = {
        name: this.name,
        avatar: this.avatar
      }
      this.users.unshift(newUser)
      this.name = ''
      this.avatar = ''
   },

    nextUser () {
      if (this.userCounter !== (this.users.length - 1)) {
        return this.userCounter++
      }
    },
    prevUser () {
      if (this.userCounter !== 0) {
        return this.userCounter--
      }
    }
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

.avatar {
  max-width: 400px;
}
.btn {
  border-color: #2c3e50;
  color: #2c3e50;
  border-radius: 14px;
  background: none;
  margin: 20px;
  cursor: pointer;
  }


.form {
  display: flex;
  flex-direction: column;
}
</style>
