<template>
    <nav class="navbar shadow p-3 fixed-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <h1 class="navbar-brand fw-bold" href="#">Kasir</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <nuxt-link to="/transaksi">
                            <a class="nav-link" href="#">Transaksi</a>
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
    </nav>
        <div class="container-fluid">
            <div class="row p-5 trans"><h3 class="fw-bold">Kelola Transaksi</h3>
                <div class="form col-lg-8">
                    <div class="text-center"><h4>Tambah Transaksi</h4></div>
                    <form class="my-5 p-5 rounded shadow">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Tipe Resep</label>                            
                                <select class="form-select" aria-label="Default select example">
                                    <option disable value=" "></option>
                                    <option value="Resep">Resep</option>
                                    <option value="Non-resep">Non-resep</option>
                                </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">No Resep</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1">
                        </div>
                        <div class="row transaksi">
                            <div class="col-md-6">
                                <div class="mb-3 fw-semibold">
                                    Tanggal Resep
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3 text-end">
                                    18/04/2024
                                </div>
                            </div>
                        </div>
                        <div class="row transaksi">
                            <div class="col-md-6">
                                <div class="mb-3 fw-semibold">
                                    Nama Pasien
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3 text-end">
                                    Dita Nur Sabila                         
                                </div>
                            </div>
                        </div>
                        <div class="row transaksi">
                            <div class="col-md-6">
                                <div class="mb-3 fw-semibold">
                                    Nama Dokter                            
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3 text-end">
                                    Dr. Indah          
                                </div>
                            </div>
                        </div>
                        <div class="row transaksi">
                            <div class="col-md-6">
                                <div class="mb-3 fw-semibold">
                                    Resep Obat                            
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3 text-end">
                                    Amoxilin                     
                                </div>
                            </div>
                        </div>
                        <div class="row transaksi">
                            <div class="col-md-6">
                                <div class="mb-3 fw-semibold">
                                    Harga                          
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3 text-end">
                                    Rp. 6.000                            
                                </div>
                            </div>
                        </div>
                        <div class="row transaksi">
                            <div class="col-md-6">
                                <div class="mb-3 fw-semibold">
                                    Quantitas                          
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3 text-end">
                                    2                            
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-3 bayar rounded shadow">
                    <div class="total p-3">
                        <h4 class="fw-semibold">Total Bayar</h4>
                        <h5>Rp. 12.000</h5>
                    </div>
                    <div class="text-center">
                        <div class="btn btn-primary mt-4">Bayar</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>

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

.trans {
    margin-top: 18rem;
    padding-left: 7rem;
}

h1 {
    font-size: 1.7rem;
}

.transaksi {
    font-size: 1.2rem;
}

.bayar {
    background-color: white;
    height: 18rem;
    margin-top: 9rem;
    margin-left: 3rem;
}

h1, h3, h4, h5, a, label, .btn {
    font-family: "Poppins", sans-serif;
}
</style>
