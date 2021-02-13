<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
               <router-link to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/projet">Projet</router-link>
            </li>
            </ul>
        </div>
    </nav>
</div>


</template>

<script>
export default {
  name: "Header",
};
</script>




<style scoped>
.header li{
 padding: 30px 10px;
}

</style>