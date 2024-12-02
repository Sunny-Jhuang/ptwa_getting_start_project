<template>
  <div id="app">
    <section class="nav-bar">
      <h1>XXX的個人網站</h1>
      <p>首頁</p>
      <p>部落格</p>
    </section>
    <section class="content">
      <router-view />
    </section>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style></style>
