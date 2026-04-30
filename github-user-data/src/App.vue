<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search User</router-link>
  </nav>
  <router-view></router-view>
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
a{
  color: #f64348;
  text-decoration: none;
  text-transform: uppercase;
 
  font-weight: 600;
}

a + a{
 margin-left: 1rem;
}

a:hover{
  cursor: pointer;
  filter: brightness(0.9);
}
nav{
  border-bottom: 2px solid #fff;
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
