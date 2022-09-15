<template>
  <form class="form" @submit.prevent>
    <input
        v-model="user.name"
        type="text"
        placeholder="Введіть ім'я"
    >
    <textarea
        v-model="user.avatar"
        placeholder="Додайте фото"
    >
      </textarea>
    <button class="form__submit" @click="createUser" type="submit">Створити</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        avatar: ''
      }
    }
  },
  methods: {
    createUser() {
      this.$emit('create', this.user, 'ya loh')
      this.user = {
        name: '',
        avatar: ''
      }
    },
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