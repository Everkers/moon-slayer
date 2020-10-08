<template>
  <div style="padding:4.5em 0">
    <h1
      style="margin-bottom: 1.2em;"
      class="is-size-3 has-text-weight-bold has-text-light"
    >
      Change Your Current Rank
    </h1>
    <div class="ranks">
      <div
        v-for="(rank,index) in ranks"
        :key="index"
        class="rank"
      >
        <img
          :src="rank.pathLong"
          alt=""
        >
        <h3
          style="margin:0.5em"
          class="is-size-5 has-text-light"
        >
          {{ rank.name }} {{ rank.division =='undefined' ? '' : rank.division }}
        </h3>
        <b-button
          class="button is-primary"
          @click="setRank(rank.name , rank.division)"
        >
          set rank
        </b-button>
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
    setRank(name, division) {
      const formatDivision = this.getDivision(division);
      this.SET_RANK_STATUS({
        lol: {
          rankedLeagueTier: name,
          rankedLeagueDivision: formatDivision,
        },
      });
    },
    importAll(r) {
      r.keys().forEach(key => (this.ranks.push({
        pathLong: r(key), pathShort: key, name: key.replace('.png', '').replace('./', '').split('-')[1].split('_')[0], division: key.replace('.png', '').replace('./', '').split('-')[1].split('_')[1],
      })));
    },
  },
};
</script>

<style lang='scss'>
.ranks{
    display: flex;
    flex-wrap: wrap;
  .rank{
    background-color: #090809;
    margin-right: 1.5em;
    margin-bottom: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap column;
    width: 10em;
    border-radius: 0.5em;
    padding: 1.2em 0;
    .img{
      width:130px;
    }
  }
}
</style>
