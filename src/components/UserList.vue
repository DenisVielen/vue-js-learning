<template>
  <div class="slider">
    <div>
      <img class="avatar" :src="getUser.avatar" alt="">
      <p> Ім'я: {{ getUser.name }} </p>
    </div>
    <button
        @click="prevUser"
        class="btn"
        type="button"
    >Попередній
    </button>
    <button
        @click="nextUser"
        class="btn"
        type="button"
    >Наступний
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    currentDate: {
      type: Number,
      required: true
    }
  },
  data() {
    return{
    userCounter: 0
    }
  },
  watch: {
    currentDate (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.userCounter = 0
      }
    }
  },
  computed: {
    ...mapGetters({
      getUsers: 'GET_USERS'
    }),
    getUser () {
      return this.getUsers[this.userCounter]
    }
  },
  methods: {
    nextUser() {
      if (this.userCounter !== (this.$store.state.users.length - 1)) {
        return this.userCounter++
      }
    },
    prevUser() {
      if (this.userCounter !== 0) {
        return this.userCounter--
      }
    },
  }
}
</script>

<style scoped>
.avatar {
  max-width: 400px;
}
.btn {
  border-color: #2c3e50;
  color: #2c3e50;
  border-radius: 14px;
  background: none;
  margin: 20px;
  padding: 4px 10px;
  cursor: pointer;
}
</style>