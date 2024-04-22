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
                            <a class="nav-link text-danger">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>


</script>

<style lang="scss" scoped>
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

a {
    font-weight: 500;
    font-size: 1rem;
}

h1 {
    font-size: 1.7rem;
}

h1, a {
    font-family: "Poppins", sans-serif;
}
</style>