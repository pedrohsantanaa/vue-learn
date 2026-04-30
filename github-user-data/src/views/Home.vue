<script setup>
// import { searchHistory } from '../store/searchHistory.js'
import { useSearchHistoryStore } from '../store/useSearchHistoryStore';

const searchHistory = useSearchHistoryStore()
</script>

<template>
    <h1>Bem vindo!</h1>
    <p>Essa é a página inicial do App</p>

    <section>
        <h2>Histórico de Pesquisa:</h2>
        <p v-for="user in searchHistory.users">{{ user }}</p>
    </section>


</template>