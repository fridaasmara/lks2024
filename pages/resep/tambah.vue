<template>
    <!-- <nav class="navbar shadow p-3 fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <h1 class="navbar-brand fw-bold" href="#">Apoteker</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <nuxt-link to="/resep">
                            <a class="nav-link" href="#">Resep</a>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link>
                            <a class="nav-link text-danger" href="#">Logout</a>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->
        <div class="container-fluid">
            <h3 class="fw-bold">Kelola Resep</h3>
            <div class="form col-md-6 offset-md-3">
                <div class="text-center"><h4>Tambah Resep</h4></div>
                <form @submit.prevent="tambahResep" class="my-5 p-5 rounded shadow">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">No Resep</label>
                        <input v-model="form.No_Resep" type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Tanggal Resep</label>
                        <input v-model="form.Tgl_Resep" type="date" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nama Pasien</label>
                        <input v-model="form.Nama_Pasien" type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nama Dokter</label>
                        <input v-model="form.Nama_Dokter" type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Resep Obat</label>
                                <input v-model="form.Obat_Resep" type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Jumlah</label>
                                <input v-model="form.Jumlah_Obat" type="number" class="form-control" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary mt-4">Tambah</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const form = ref ({
    No_Resep: "",
    Tgl_Resep: "",
    Nama_Pasien: "",
    Nama_Dokter: "",
    Obat_Resep: "",
    Jumlah_Obat: "",
})

const tambahResep = async () => {
    // console.log(form.value)
    const { error } = await supabase
    .from('Tbl_DataResep')
    .insert([
        form.value,
    ])

    if(!error) navigateTo ('/resep')

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* .navbar {
    margin-top: 8rem;
}

.navbar-nav {
    padding-left: 5rem;
}

.nav-item {
    margin-left: 2rem;
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

h1, h3, h4, a, label, .btn {
    font-family: "Poppins", sans-serif;
}
</style>