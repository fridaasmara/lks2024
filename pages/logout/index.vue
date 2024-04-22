<template>
    <div>
        tunggu sebentar, sedang keluar sistem...
    </div>
</template>


<script setup>
const supa = useSupabaseClient()

async function logout() {
    const { error } = await supa.auth.signOut()
    if(!error) navigateTo("/login")
}

onMounted(() => {
    logout()
})
</script>