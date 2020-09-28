<template>
  <div id="app">
    <router-link to="/">
      back
    </router-link>
    <router-link to="/ranked">
      ranked
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MoonSlayer2',
};
</script>

<style>
/* CSS */
</style>
