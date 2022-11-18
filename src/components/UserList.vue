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
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['showUser'])
  },
  methods: {
    ...mapActions(['nextUser', 'prevUser'])
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