<template>
    <nav class="navbar shadow p-3 fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <h1 class="navbar-brand fw-bold" href="#">Admin</h1>
        </div>
    </nav>
    <div class="container-fluid">
        <h3 class="fw-bold">Kelola User</h3>
        <div class="form col-md-6 offset-md-3">
            <div class="text-center">
                <h4>Tambah User</h4>
            </div>
            <form @submit.prevent="tambahUser" class="my-5 p-5 rounded shadow">
                <div class="mb-3">
                    <label class="form-label">Tipe User</label>
                    <select v-model="form.tipe_user" class="form-select">
                        <option value=" ">-</option>
                        <option value="admin">Admin</option>
                        <option value="apoteker">Apoteker</option>
                        <option value="kasir">Kasir</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nama</label>
                    <input v-model="form.nama" type="text" class="form-control">
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input v-model="form.email" type="email" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input v-model="form.password" type="password" class="form-control">
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary mt-4">Tambah</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const supa = useSupabaseClient()
const form = ref({
    tipe_user: '',
    nama: '',
    email: '',
    password: '',
})

async function tambahUser() {
    // console.log(form.value)

    const { data, error } = await supa.auth.signUp({
        email: form.value.email,
        password: form.value.password,
        options: {
            data: {
                nama: form.value.nama,
                tipe_user: form.value.tipe_user
            }
        }
    })

    if(data) console.log("success: 200")
    if(error) throw error
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.navbar {
    margin-top: 8rem;
}

.navbar-nav {
    padding-left: 5rem;
}

.nav-item {
    margin-left: 2rem;
}

/* .container-fluid {
    margin-top: 8.5rem;
} */

form {
    background-color: white;
}

label {
    font-size: 1.2rem;
}

.btn {
    width: 10rem;
    font-size: 1.3rem;
}

h4 {
    font-weight: 600;
    margin-top: 4rem;
}

h3 {
    margin-top: 18rem;
    padding-left: 7rem;
}

h1 {
    font-size: 1.7rem;
}

h1,
h3,
h4,
a,
label,
.btn {
    font-family: "Poppins", sans-serif;
}
</style>
