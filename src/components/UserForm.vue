<template>
  <form class="form" @submit.prevent>
    <input
        v-model="saveUserName"
        type="text"
        placeholder="Введіть ім'я"
    >
    <textarea
        v-model="saveUserAvatar"
        placeholder="Додайте фото"
    >
      </textarea>
    <button class="form__submit" @click="createUser" type="submit">Створити</button>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      user: {
        name: '',
        avatar: ''
      }
    }
  },
  computed: {
    saveUserName: {
      get () {
        return this.name
      },
      set (value) {
        this.$store.commit('newUserName', value)
      }
    },
    saveUserAvatar: {
      get () {
        return this.name
      },
      set (value) {
        this.$store.commit('newUserAvatar', value)
      }
    }
  },
  methods: {
    ...mapActions({
      createUser: 'createUser'
})
  }
}
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
  margin-bottom: 20px;

  border-color: #2c3e50;
  color: #2c3e50;
  border-radius: 2px;
  background: none;
  text-align: center;
  padding: 6px;
}

textarea {
  border-color: #2c3e50;
  color: #2c3e50;
  border-radius: 2px;
  background: none;
  width: 100%;
  padding: 14px 6px 0 6px;
  text-align: center;
  vertical-align: center;
}

.form__submit {
  border-color: #2c3e50;
  color: #2c3e50;
  border-radius: 14px;
  background: none;
  margin: 20px;
  cursor: pointer;
}
</style>