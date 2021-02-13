<template>
<div id="app">
  <div v-if="showProfil"><Profil></Profil></div>
      <div v-else class="accueil">
        <div class="title">
          <h1>Accueil</h1>

        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import Profil from "./Profil.vue";


export default {
  name: "Accueil",
  components: {
    Profil
  },
  data() {
      return {
          showProfil: false,
      }
  },

  created() {
    let loggedIn = false;
  
    if (loggedIn) {
        this.showProfil = true;
        console.log(this.showProfil);
    }
  }
}
</script>


<style scoped>
.accueil {
 padding: 30px;
}
</style>