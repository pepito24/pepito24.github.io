<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <p v-for="item in menu" :key="item.name">
           <router-link :to="{path:item.nom}" > {{item.nom}} </router-link>
         </p>     
    </nav>
</div>
</template>

<script>
export default{
  name: "Header",
   data(){
      return{
      menu:[
            {nom: "Accueil", path: "/"},
            {nom: "Projet", path: "/projet"},
            {nom: "Contact", path: "/contact",}
         ],

      
      }
   }
}
</script>

<style scoped>

.header li{
 padding: 30px 10px;
}

p{
 font-size: 20px;
 padding:10px;
}

</style>