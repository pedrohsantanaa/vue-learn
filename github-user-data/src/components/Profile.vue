<script setup>
import { reactive, ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import UserInfo from './UserInfo.vue';
import Repository from './Repository.vue';
import Form from './Form.vue';

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

async function fetchGithubUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`)
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

onMounted(() => {
    console.log("O Componente foi montado.")
})

onUpdated(() => {
    console.log("O Componente foi atualizado.")
})

onUnmounted(() => {
    console.log("O Componente foi desmontado")
})

</script>

<template>
    <div class="main">
        <slot></slot>
       
        <Form @form-submit="fetchGithubUser"/>

        <div v-if="state.login !== ''">
            <UserInfo :login="state.login" :name="state.name" :company="state.company" :avatar_url="state.avatar_url"
                :bio="state.bio" :location="state.location" />
        </div>

        <section v-if="state.repos.length > 0">
            <h2>{{ reposCountMessage }}</h2>
            <article v-for="repo in state.repos">
                <Repository :full_name="repo.full_name" :description="repo.description" :html_url="repo.html_url" />
            </article>

        </section>
        <slot name="footer"></slot>

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