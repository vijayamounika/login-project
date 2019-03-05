<template>
  <div id="app">
    <div id="nav" v-if="isShow">
      <router-link to="/Register">Register</router-link>|
      <router-link to="/Login">Login</router-link>
    </div>
    <div v-else>
      <span v-on:click="doLogout">Sign out</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { setToken } from "../axios.js";

export default {
  name: "App",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    doLogout() {
      this.isShow = true;
      localStorage.removeItem("token");
      setToken();
      this.$router.push("/Login");
    }
  },
  mounted() {
    this.$root.$on("show-signout", data => {
      this.isShow = data.loggedIn;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
