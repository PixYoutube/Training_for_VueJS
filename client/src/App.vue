<script setup>
const user = {
  isAuthenticated: true,
  name: "Simple"
}
</script>

<template>
  <header>
            <section class="title">MyConversation</section>
            <section class="btn-group-auth" v-if="!user.isAuthenticated">
                <button class="btn-group" id="login">Login</button>
                <button class="btn-group" id="register">Register</button>
            </section>
            <section class="user-info" v-if="user.isAuthenticated">
              <p class="user-name">{{ user.name }}</p>
              <button class="btn-group" id="user-config">Config</button>
            </section>
        </header>
    <router-view></router-view>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  background-color: rgb(234, 233, 233);
}

header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: rgb(0,21,203);
  background: -moz-linear-gradient(170deg, rgba(0,21,203,1) 33%, rgba(1,117,231,1) 76%);
  background: -webkit-linear-gradient(170deg, rgba(0,21,203,1) 33%, rgba(1,117,231,1) 76%);
  background: linear-gradient(170deg, rgba(0,21,203,1) 33%, rgba(1,117,231,1) 76%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0015cb",endColorstr="#0175e7",GradientType=1);
}

header section.title {
  color: #fff;
  margin-left: 20px;
  font-size: 25px;
  font-weight: 500;
}

header section.btn-group-auth {
  margin-left: auto;
  margin-right: 25px;
}

header section.btn-group-auth button.btn-group ion-icon {
  transform: translateY(20%) translateX(-20%);
}

header section.btn-group-auth button.btn-group {
  margin: 5px;
  cursor: pointer;
  width: 100px;
  height: 30px;
  color: black;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
}

header section.user-info {
  margin-right: 25px;
  margin-left: auto;
  display: flex;
}

header section.user-info p.user-name {
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
}

header section.user-info button#user-config {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 25px;
  transform: translateY(5%);
}
</style>
