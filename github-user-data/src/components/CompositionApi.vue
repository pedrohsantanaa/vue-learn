<script setup>
import { reactive, ref, computed } from 'vue';

const searchInput = ref('')

const state = reactive({
    valor: "",
    count: 0,
    name: '',
    login: '',
    bio: '...',
    company: '',
    avatar_url: '',
    repos: [],
    location: ''
})

async function fetchGithubUser(ev) {
    ev.preventDefault()
    const res = await fetch(`https://api.github.com/users/${searchInput.value}`)
    const { login, name, bio, company, avatar_url, location } = await res.json()

    state.login = login,
        state.name = name,
        state.bio = bio,
        state.company = company,
        state.avatar_url = avatar_url,
        state.location = location

    fecthUserRepositories(login)

}

async function fecthUserRepositories(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos`)
    const repos = await res.json()

    state.repos = repos

}

const reposCountMessage = computed(() => {
    return state.repos.length > 0
        ? `${state.name} possui ${state.repos.length} repositórios públicos`
        : `${state.name} não possui nenhum repositório público.`

})

</script>

<template>
    <div class="main">
        <h2>GitHub User Data</h2>
        <p>Pesquisando por: <strong>https://api.github.com/users/{{ searchInput }}</strong></p>
        <form @submit="fetchGithubUser">
            <input type="text" v-model="searchInput">
            <button>Carregar Usuário</button>
        </form>


        <div v-if="state.login !== ''">
            <img v-bind:src="state.avatar_url">
            <h1>{{ state.name }}</h1>
            <h2>{{ state.company }}</h2>
            <h3>{{ state.location }}</h3>
            <span>{{ state.bio }}</span>
            <span>@{{ state.login }}</span>
        </div>

        <section v-if="state.repos.length > 0">
            <h2>{{ reposCountMessage }}</h2>
            <article v-for="repo in state.repos">
                <h3>{{ repo.full_name }}</h3>
                <p>{{ repo.description }}</p>
                <a :href="repo.html_url" target="_blank">Ver no Github</a>
            </article>

        </section>

    </div>

</template>

<style>
.main {
    display: grid;
    justify-content: center;
    align-items: center;
}

/* Shared layout */
input,
button {
    max-width: 20rem;
    padding: .5rem;
    border-radius: .25rem;
}

img {
    border-radius: 80%;
    width: 50%;
}

/* Specifics */
input {
    background-color: #1c1a1d;
    border: 1px solid #f64348;
    color: #e5e5e5;
    margin: 1rem 1rem 1rem 0;
}

button {
    background-color: #f64348;
    border: unset;
    color: #1c1a1d;
    font-size: 1rem;
}
</style>