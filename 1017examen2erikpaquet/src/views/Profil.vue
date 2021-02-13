<template>
  <div class="all">

  <header>
        <div class="text-center mt-5">
          <h1 >Bienvenue</h1>
        </div>
  </header>


  <div class="center">
      <div class="box">
        <h2>Profile</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div class="box orange">
        <h2>Skills</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
  </div>

  <div class="center orange">
      <div class="box white">
        <h2>Education</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div class="box white">
        <h2>Languages</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
  </div>

  <div class="center mb-5">
      <div class="box orange">
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div class="box">
        <h2>Expériences</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
  </div>


  </div>
</template>

<script>

export default {
  name: "Profil",
  methods: {
  deconnection() {
    this.montrerProfile = false;
    this.loggedIn = false;
  }
  },
}

</script>

<style scoped>


.center{
 width:100%;
 display:inline-flex;
}

.box {
  width:calc(50% - 40px);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding:30px;
  margin:5% 15px
}

.box:first-child{
  margin-left:25px;
}

.orange{
  background: #ff8400;
}
.white{
  background: white;
}

</style>