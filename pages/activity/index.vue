<template>
    <nav class="navbar shadow p-3 fixed-top navbar-expand-lg bg-light">
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
    </nav>

    <h3 class="fw-bold">Log Activity</h3>

    <p>Menampilkan : 1 dari 1 activitas</p>

    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th>Username</th>
                <th>Tanggal</th>
                <th>Waktu</th>
                <th>Aktivitas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>fridaasmara</td>
                <td>19/04/2024</td>
                <td>18 : 08</td>
                <td>Login</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.navbar {
    margin-top: 8em;
}

.navbar-nav {
    padding-left: 5rem;
}

.nav-item {
    margin-left: 2rem;
}

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

i {
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
</style>