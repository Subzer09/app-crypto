<template>
  <div>
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "./components/Header";
import Home from "./views/Home";
export default {
  components: {
    Header,
    Home,
  },
  name: "App",
};
</script>

<style lang="scss">
@import "bootstrap";
body {
  background-color: $gray-100;
}
</style>
