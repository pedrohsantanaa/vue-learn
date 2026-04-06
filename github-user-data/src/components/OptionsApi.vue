<script>
export default {
    data() {
        return {
            valor: "Pedro Henrique",
            count: 0,
            name: 'John Doe',
            login: 'johndue',
            bio: '...',
            company: 'Acme Inc.',
            avatar_url: 'https://unsplash.it/253',
            search: '',
            location: ''
        }
    },
    methods: {
        async fetchGithubUser() {
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const { login, name, bio, company, avatar_url, location } = await res.json()

            this.login = login,
                this.name = name,
                this.bio = bio,
                this.company = company,
                this.avatar_url = avatar_url,
                this.location = location
        }
    }
}
</script>

<template>
    <div class="main">
        <h2>GitHub User Data</h2>
        <input type="text" v-model="searchInput">
        <button v-on:click="fetchGithubUser()">Carregar Usuário</button>
        <img v-bind:src="avatar_url">

        <h1>{{ name }}</h1>
        <h2>{{ company }}</h2>
        <h3>{{ location }}</h3>
        <span>{{ bio }}</span>
        <span>@{{ login }}</span>
    </div>

</template>

<style>

.main{
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