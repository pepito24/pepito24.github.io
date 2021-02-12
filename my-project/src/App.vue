<template>
  <div id="app">
    <Header></Header>
     <Accueil></Accueil>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Accueil from "./views/Accueil.vue";
import Footer from "./components/Footer.vue";



export default {
  name: "App",
  components: {
    Header,
    Footer,
    Accueil,
  },
};
</script>
