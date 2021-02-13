<template>
  
  <div class="form">
  <h1 class="text-center">Contact</h1>
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" name="nom" id="nom">
      </div>
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="text" class="form-control" name="prenom" id="prenom">
      </div>
      <div class="form-group">
        <label for="courriel">Courriel</label>
        <input type="email" class="form-control" name="courriel" id="courriel">
      </div>
      <div class="form-group">
        <label for="cateorie">Catégorie</label>
        <select name="categorie" id="cateorie" class="form-control">
        <option v-for="categorie in categories" :key="categorie">{{categorie.nom}}</option>
        </select>
      </div>


      <button type="button" class="btn btn-danger">Envoyer</button>

    </form>
  </div>
</template>




<script>
export default {
  name: "Contact",
  data() {
    return {
      categories: [
        {nom: "State of decay 2"},
        {nom: "Totalwar Warhammer 1"},
        {nom: "Totalwar Warhammer 2"},
        {nom: "Totalwar Warhammer 3"},
        {nom: "Autres"}
      ]
    }
  }
}
</script>

<style scoped>

.form{
 width: 30%;
 margin: 5% 35%;
}

.form-group{
 margin-top: 15px;
}

button{
 margin-top: 25px;
}

h1{
 margin-bottom: 50px;
}

</style>