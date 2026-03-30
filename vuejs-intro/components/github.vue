<template>
    <h2>GitHub User Data</h2>
    <input type="text" v-model="searchInput">
    <button v-on:click="fetchGithubUser">Carregar Usuário</button>

</template>