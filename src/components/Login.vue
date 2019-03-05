<template>
  <div class="hello">
    <h1>{{ msg }}</h1>Email:
    <input type="text" v-model="email" placeholder="email">
    <br>
    <br>Password:
    <input type="password" v-model="password" placeholder="password">
    <br>
    <br>
    <button type="submit" v-on:click="loginUser">Sign In</button>
    <a
      style="cursor: pointer; text-decoration: underline"
      v-on:click="navigate()"
    >Navigate to Register</a>
  </div>
</template>

<script>
import { default as axios, setToken } from "../../axios.js";

export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Login Page",
      email: "",
      password: ""
    };
  },
  methods: {
    navigate() {
      this.$router.push({ name: "Register" });
    },
    loginUser: function() {
      axios({
        method: "post",
        url: "/login",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          if (response.data.status === 1) {
            localStorage.setItem("token", response.data.token);
            setToken();
            this.navigatetodashboard();
          }
        })
        .catch(error => {
          alert(error.response.data.message);
        });
    },
    navigatetodashboard() {
      this.$router.push({ name: "Dashboard" });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
