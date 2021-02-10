<template>
  <div id="app">
    <Header></Header>
     <Accueil></Accueil>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Accueil from "./views/accueil.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Accueil,
  },
};
</script>