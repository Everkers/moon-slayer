<template>
  <div class="main">
    <div class="summoner-name">
      <div class="server has-background-primary">
        Euw Server
      </div>
      <h1 class="is-size-1 has-text-light has-text-weight-bold">
        RENEKMOON
      </h1>
    </div>
    <div class="cards">
      <card />
      <card />
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import card from './card';

export default {
  components: { card },
};
</script>

<style lang='scss'>
.main{
    padding: 9.5em 0;
    .cards{
        display:flex;
        .card{
            margin-right:1.5em;
        }
    }
    .summoner-name{
        margin-bottom: 2.5em;
        .server{
        width: fit-content;
        padding: 0.3em 1.5em;
        border-radius: 2.2em;
        background-color: #222222;
        color: #fff;
        }
    }
}
</style>
