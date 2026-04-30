<script setup>
import { ref } from 'vue';
// import {searchHistory} from '../store/searchHistory.js'
import { useSearchHistoryStore } from '../store/useSearchHistoryStore';

const emit = defineEmits(['formSubmit'])
const searchInput = ref('')

const searchHistory = useSearchHistoryStore()


function handleSubmit(ev) {
    ev.preventDefault();
    // searchHistory.users.unshift(searchInput.value)
    searchHistory.pushToHistory(searchInput.value)
    emit('formSubmit', searchInput.value)
}

function showSearchHistory() {
    alert(`Histórico de Pesquisa:\n${searchHistory.users.join('\n')}`)
}

</script>

<template>
    <p>Pesquisando por: <strong>https://api.github.com/users/{{ searchInput }}</strong></p>
    <form @submit="handleSubmit">
        <input type="text" v-model="searchInput">
        <button>Carregar Usuário</button>
        <button type="button" @click="showSearchHistory">Ver Histórico</button>
    </form>
</template>

<style scoped>
button {
    margin-left: 2rem;
}
</style>