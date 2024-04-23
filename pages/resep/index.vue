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

    <h3 class="fw-bold">Kelola Resep</h3>

    <p>Menampilkan : 1 dari 1 resep</p>

    <div class="row d-flex justify-content-center">
        <div class="col-md-9 input">
            <div class="input-group flex-nowrap rounded">
                <input type="search" class="form-control" placeholder="Cari" aria-label="Search" aria-describedby="search-addon"/>
                <span class="input-group-text bg-white"><i class="bi bi-search search"></i></span> 
            </div>
        </div>
        <div class="col-md-1">
            <div class="text-center">
                <nuxt-link to="../resep/tambah">
                    <div class="btn">
                        <i class="bi bi-plus-square"></i>
                    </div>
                </nuxt-link>
            </div>
        </div>
        <div class="col-md-1">
            <div class="text-center">
                <div class="btn"><i class="bi bi-pencil-square"></i></div>
            </div>
        </div>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th>No Resep</th>
                <th>Tanggal Resep</th>
                <th>Nama Pasien</th>
                <th>Nama Dokter</th>
                <th>Resep Obat</th>
                <th>Jumlah</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(resep, i) in reseps" :key="i">
                <td>{{ i + 1 }}</td>
                <td>{{ resep.No_Resep }}</td>
                <td>{{ resep.Tgl_Resep }}</td>
                <td>{{ resep.Nama_Pasien }}</td>
                <td>{{ resep.Nama_Dokter }}</td>
                <td>{{ resep.Obat_Resep }}</td>
                <td>{{ resep.Jumlah_Obat }}</td>
                <td><i class="bi bi-x-circle text-danger"></i></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const supabase = useSupabaseClient()

const reseps = ref ([])

const getResep = async () => { 
    const { data, error } = await supabase
        .from('Tbl_DataResep')
        .select('*')
    if(data) reseps.value = data
}

onMounted(() => {
    getResep()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* .navbar {
    margin-top: 8em;
}

.navbar-nav {
    padding-left: 5rem;
}

.nav-item {
    margin-left: 2rem;
} */

h3 {
    margin-top: 18rem;
    padding-left: 7rem;
}

p {
    margin-bottom: 3rem;
    font-size: 1.4rem;
    margin-top: 5rem;
    padding-left: 10rem;
}

.input {
    margin-top: 0.5rem;
}

.btn {
    width: 7rem;
    background-color: white;
}

i {
    font-size: 2rem;
}

.search {
    font-size: 1.5rem;
}

a {
    font-weight: 500;
    font-size: 1rem;
}

h1 {
    font-size: 1.7rem;
}

.table {
    margin-top: 5rem;
}

.table th {
    font-size: 1.3rem;
}

.table td {
    font-size: 1.2rem;
}

h1, h3, a, p, th, td {
    font-family: "Poppins", sans-serif;
}

span {
    border-left: none;
}

input {
    border-right: none;
}
</style>