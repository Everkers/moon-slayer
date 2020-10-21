<template>
  <div id="app">
    <sideBar />
    <div class="home">
      <div
        style="padding:0 1.5em;"
        class="container"
      >
        <router-view />
      </div>
      <div class="home__blur" />
    </div>
    <!-- <router-link to="/">
      back
    </router-link>
    <router-link to="/ranked">
      ranked
    </router-link>
    <router-view /> -->
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import sideBar from './components/sidebar';
// eslint-disable-next-line import/first
export default {
  name: 'MoonSlayer2',
  components: { sideBar },
};
</script>

<style lang='scss' >
html{
  overflow:hidden;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
.home{
  overflow:auto;
  font-family: 'Open Sans', sans-serif !important;
  background:linear-gradient(rgba(0,0,0,0.43), rgba(0,0,0,0)) ,url('https://images6.alphacoders.com/983/983435.jpg');
  background-size: cover;
  background-position: center;
  height:100vh;
  width:100%;
  &__blur{
    position: absolute;
    bottom: 0;
    left:0;
    width:100%;
    height:100px;
    background:black;
    filter:blur(57px)

  }

}
</style>
