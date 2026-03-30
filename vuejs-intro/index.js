const app = Vue.createApp({
    data() {
        return {
            valor: "Pedro Henrique",
            count: 0,
            name: 'John Doe',
            login: 'johndue',
            bio: '...',
            company: 'Acme Inc.',
            avatar_url:'https://unsplash.it/253',
            search: '',
            location: ''
        }
    },
    methods: {
        incrementarCount(){
            this.count++
        },

        async fetchGithubUser(){
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const {login, name, bio, company, avatar_url, location} = await res.json()

            this.login = login,
            this.name = name,
            this.bio = bio,
            this.company = company,
            this.avatar_url = avatar_url,
            this.location = location
        }
    },
})

app.mount('#app')