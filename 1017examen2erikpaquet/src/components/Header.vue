<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
        </li>
        </ul>
    </div>
    </nav>

    <div class="icon-bar">
      <router-link to="/home"><i class="fa fa-home"></i></router-link>
      <router-link class="nav-link" to="/login"
        ><i class="fa fa-sign-in"></i
      ></router-link>
      <router-link class="nav-link" to="/contact"
        ><i class="fa fa-envelope-square"></i
      ></router-link>
      <router-link class="nav-link" to="/register">
        <i class="fa fa-user"></i>
      </router-link>
      <router-link class="nav-link" to="/hook"
        ><i class="fa fa-info-circle"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header .navbar-brand{
 padding-left: 30px;
}
</style>