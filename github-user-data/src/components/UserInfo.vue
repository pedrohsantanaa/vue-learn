<script setup>
defineProps(['login', 'name', 'company', 'bio', 'avatar_url', 'location']);
</script>
<template>
    <img v-bind:src="avatar_url">
    <h1>{{ name }}</h1>
    <h2>{{ company }}</h2>
    <h3>{{ location }}</h3>
    <span>{{ bio }}</span>
    <span>@{{ login }}</span>
</template>

<style scoped>
img {
    border-radius: 80%;
    width: 50%;
}
</style>