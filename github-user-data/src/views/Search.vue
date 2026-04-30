<script setup>
import { ref } from 'vue'
import Profile from '../components/Profile.vue';

const isOpen = ref(true)

</script>

<template>
    <input type="checkbox" v-model="isOpen">{{ isOpen }}
    <Profile v-if="isOpen">
        <h2>GitHub User Data</h2>

        <template v-slot:footer>
            <footer>
                Desenvolvido por phtech
            </footer>

        </template>
    </Profile>
</template>