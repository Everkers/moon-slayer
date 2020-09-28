<template>
  <div class="champion-1">
    <div class="skins">
      <div
        v-for="(skin , index) in CHAMPION_SKINS_STATE"
        :key="index"
        class="skin"
      >
        <img
          :src="'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + $route.query.name + '_' + skin.num + '.jpg' "
          alt=""
        >
        <button @click="SET_BACKGROUND(skin.id)">
          Set Skin
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['CHAMPION_SKINS_STATE']),
  },
  mounted() {
    this.GET_CHAMPION_SKINS(this.$route.query.name);
  },
  methods: {
    ...mapActions(['GET_CHAMPION_SKINS', 'SET_BACKGROUND']),

  },

};
</script>

<style>

</style>
