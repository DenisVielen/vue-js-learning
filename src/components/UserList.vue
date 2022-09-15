<template>
  <div class="slider">
    <div>
      <img class="avatar" :src="showUser.avatar" alt="">
      <p> Ім'я: {{ showUser.name }} </p>
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
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      userCounter: 0,
    }
  },
  computed: {
    showUser () {
      return this.users.find((user, index) => {
        return index === this.userCounter
      })
    }
  },
  methods: {
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