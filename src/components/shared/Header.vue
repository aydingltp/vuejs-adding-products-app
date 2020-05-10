<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <a class="navbar-brand" href="#">Ürün Listesi</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link
                active-class = "active"
                tag = "li"
                to = "/urun-islemleri"
                class = "nav-item"
                >
                    <a class="nav-link" href="#">Ürün İşlemleri</a>
                </router-link>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ürün Çıkışı</a>
                </li>
            </ul>
        </div>
    </nav>

</template>
<script>

</script>
<style>

</style>