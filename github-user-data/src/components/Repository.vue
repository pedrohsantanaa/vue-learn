<script setup>
defineProps(['full_name', 'description', 'html_url'])

</script>
<template>
    <h3>{{ full_name }}</h3>
    <p>{{ description }}</p>
    <a :href="html_url" target="_blank">Ver no Github</a>
</template>

<style scoped>
    a{
        text-decoration: none;
        color:brown;
        margin-left: 1rem;
    }
    h3{
        margin: 1rem 1rem 0rem 1rem;
        color: cadetblue;
    }
    p{
        margin-left: 1rem;
        color: chocolate;
    }
</style>