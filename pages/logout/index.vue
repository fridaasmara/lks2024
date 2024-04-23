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

async function insertLog() {
    const user = useSupabaseUser()
    const { error } = await supa
    .from('LogActifity')
    .insert([{
        Aktifitas: 'Logout',
        nama: user.value.user_metadata.nama
    }])

    if(!error) logout()
}

onMounted(() => {
    insertLog()
})
</script>