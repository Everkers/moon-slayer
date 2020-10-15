<template>
  <div class="main">
    <div class="summoner-name">
      <div class="server has-background-primary">
        {{ GET_PROFILE_DATA.gameTag }}
      </div>
      <h1 class="is-size-1 has-text-light has-text-weight-bold">
        {{ GET_PROFILE_DATA.name }}
      </h1>
    </div>
    <div class="cards">
      <card
        :rank="false"
        label="Highest Mastery Points"
        :name="GET_HIGHEST_MASTERY_CHAMP.name"
        :points="GET_HIGHEST_MASTERY_CHAMP.mastery.championPoints"
        :image="GET_HIGHEST_MASTERY_CHAMP.image.full"
        :version="GET_HIGHEST_MASTERY_CHAMP.version"
      />
      <card
        label="Current Rank"
        :rank="true"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import card from './card';

export default {
  components: { card },
  computed: {
    ...mapGetters(['GET_HIGHEST_MASTERY_CHAMP', 'GET_PROFILE_DATA']),
  },
};
</script>

<style lang='scss'>
.main{
    padding: 11.5em 0;
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
