<template>
  <div class="hello">
    <h1>{{ msg }}</h1>First Name:
    <input type="text" v-model="firstName" placeholder="firstname">
    <br>
    <br>Last Name:
    <input type="text" v-model="lastName" placeholder="lastname">
    <br>
    <br>Email:
    <input type="text" v-model="email" placeholder="email">
    <br>
    <br>Password:
    <input type="password" v-model="password" placeholder="password">
    <br>
    <br>
    <button type="submit" v-on:click="registerNewUser">SignUp</button>
    <router-link to="/Login">Navigate to Login Page</router-link>
  </div>
</template>

<script>
import axios from "../../axios.js";
export default {
  name: "Register",
  data() {
    return {
      msg: "Welcome to Registration Page",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      info: ""
    };
  },
  methods: {
    registerNewUser: function() {
      axios({
        method: "post",
        url: "/userregistration",
        data: {
          firstname: this.firstName,
          lastname: this.lastName,
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          if (response.data.status === 1) {
            this.navigatetologin();
          }
        })
        .catch(error => {
          alert(error.response.data.message);
        });
    },
    navigatetologin() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
