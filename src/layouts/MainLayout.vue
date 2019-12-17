<template>
  <div class="app-main-layout">
    <Navbar />
    <Sidebar />
    <Navbar />
    <main class="app-content">
      <div class="app-page"><router-view /></div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/nav/Navbar";
import Sidebar from "@/components/nav/Sidebar";
export default {
  name: "main-layout",
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped></style>
