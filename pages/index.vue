<template>
    <div class="mt-5 text-center">
        <h1 class="mt-5">home</h1>
        <span v-if="user">{{ user.user_metadata.tipe_user }}</span>
    </div>
</template>


<script setup>
const user = useSupabaseUser()
console.log(user.value.user_metadata.tipe_user)
</script>


<style scoped>

</style>