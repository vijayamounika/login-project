<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
import axios from "../../axios.js";

export default {
  name: "Register",
  data() {
    return {
      msg: "Welcome to Dashboard Page",
      name: ""
    };
  },
  mounted() {
    this.$root.$emit("show-signout", { loggedIn: false });
    axios({
      method: "get",
      url: "/dashboard"
    }).then(result => {
      this.msg = result.data.message;
      this.name = "welcome " + result.data.name;
      // console.log(result);
    });
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
