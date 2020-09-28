<template>
  <div>
    <div class="images-ranked">
      <div
        v-for="(rank,index) in ranks"
        :key="index"
        class="image"
      >
        <img
          :src="rank.pathLong"
          alt=""
        >
        <button @click="setRank(rank.name)">
          set rank
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    ranks: [],
    divisions: {
      I: 1, II: 2, III: 3, IV: 4,
    },

  }),
  mounted() {
    this.importAll(require.context('../assets/RankedEmblems/', true, /\.png$/));
  },
  methods: {
    ...mapActions(['SET_RANK_STATUS']),
    getDivision(num) {
      let div = null;
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(this.divisions)) {
        if (+num === value) div = key;
      }
      return div;
    },
    setRank(name) {
      const [tierName, division] = name.split('-')[1].split('_');
      const formatDivision = this.getDivision(division);
      this.SET_RANK_STATUS({
        lol: {
          rankedLeagueTier: tierName,
          rankedLeagueDivision: formatDivision,
        },
      });
    },
    importAll(r) {
      r.keys().forEach(key => (this.ranks.push({ pathLong: r(key), pathShort: key, name: key.replace('.png', '').replace('./', '') })));
    },
  },
};
</script>

<style>

</style>
