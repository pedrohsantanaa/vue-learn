<script setup>
import { ref } from 'vue'
import Profile from './components/Profile.vue';

const isOpen = ref(true)

</script>

<template>
  <input type="checkbox" v-model="isOpen">{{ isOpen }}
  <Profile v-if="isOpen">
    <h2>GitHub User Data</h2>

    <template v-slot:footer>
      <footer>
        Desenvolvido por phtech
      </footer>

    </template>
  </Profile>
</template>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  min-height: 100vh;
  max-width: 40rem;
  margin: 0 auto;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #1c1a1d;
  color: #e5e5e5;
}

footer{
  margin-top: 5rem;
  color: cornflowerblue;
}
</style>
