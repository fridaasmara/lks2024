<template>
    <!-- <nav class="navbar shadow p-3 fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <h1 class="navbar-brand fw-bold" href="#">Admin</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <nuxt-link to="/user">
                            <a class="nav-link">User</a>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/obat">
                            <a class="nav-link" >Obat</a>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/laporan">
                            <a class="nav-link">Laporan</a>
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link>
                            <a class="nav-link text-danger">Logout</a>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav> -->

    <h3 class="fw-bold">Kelola Obat</h3>

    <p>Menampilkan : 1 dari obat</p>

    <div class="row d-flex justify-content-center">
        <div class="col-md-9 input">
            <div class="input-group flex-nowrap rounded">
                <input type="search" class="form-control" placeholder="Cari" aria-label="Search" aria-describedby="search-addon"/>
                <span class="input-group-text bg-white"><i class="bi bi-search search"></i></span> 
            </div>
        </div>
        <div class="col-md-1">
            <div class="text-center">
                <nuxt-link to="../obat/tambah">
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
                <th>Kode Obat</th>
                <th>Nama Obat</th>
                <th>Expired Date</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(obat, i) in obats" :key="i">
                <td>{{ i + 1 }}</td>
                <td>{{ obat.Kode_Obat }}</td>
                <td>{{ obat.Nama_Obat }}</td>
                <td>{{ obat.Expired_Date }}</td>
                <td>{{ obat.Jumlah }}</td>
                <td>{{ obat.Harga }}</td>
                <td><i class="bi bi-x-circle text-danger"></i></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const supabase = useSupabaseClient()

const obats = ref ([])

const getObat = async () => { 
    const { data, error } = await supabase
        .from('Tbl_Obat')
        .select('*')
    if(data) obats.value = data
}

onMounted(() => {
    getObat()
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