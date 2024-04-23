<template>
    <div class="container-fluid">
        <div class="row mt-5 justify-content-center">
            <div class="col-lg-1">
                <img src="~/assets/img/logo-apotek.png" alt="" class="text-end">
            </div>
            <div class="col-lg-2">
                <img src="~/assets/img/img-apotek-rb.png" alt="" class="mt-1">
            </div>
        </div>

        <div class="card shadow mt-5 mb-5">
            <div class="card-body">
                <h1 class="card-title fw-bold text-center mt-2">Login</h1>
                <form @submit.prevent="SignIn" class="p-4 mt-5">
                    <div class="mb-4">
                        <input v-model="email" type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-5">
                        <input v-model="password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary mb-5">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
const supa = useSupabaseClient()
const email = ref ('')
const password = ref ('')

async function SignIn() {
  const { data, error } = await supa.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (data) {
    navigateTo ("/")
    const user = useSupabaseUser()
    insertLog(user)
  }
}

async function insertLog(user) {
    const { error } = await supa
    .from('LogActifity')
    .insert([{
        Aktifitas: 'Login',
        nama: user.value.user_metadata.nama
    }])
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container-fluid {
    margin-top: 10rem;
}

.card {
    width: 45rem;
    margin-left: 27%;
    border-radius: 2rem;
}

img {
    width: 8rem;
}

input {
    font-size: 1.5rem;
    border-top: none;
    border-left: none;
    border-right: none;
}

.btn {
    width: 12rem;
    font-size: 1.5rem;
    font-weight: 600;
}

h1, input, button {
    font-family: "Poppins", sans-serif;
}

</style>