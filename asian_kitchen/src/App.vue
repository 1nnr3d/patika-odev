<template>
  <div class="container">
    <h1 class="text-center mt-4" style="color: rgb(255, 168, 6)">
      <i>Asian Kitchen's Menu</i>
    </h1>
    <br />
    <Navbar />
    <br />
    <Menu />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
export default {
  data() {
    return {
      
    };
  },
  components: {
    Navbar,
    Menu
  }
};
</script>