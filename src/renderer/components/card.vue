<template>
  <div class="card-container">
    <h3>{{ label }}</h3>
    <div class="card">
      <div class="image-box">
        <img
          v-if="rank == false"

          :src="`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${image}`"
          alt=""
        >
        <!-- eslint-disable max-len -->
        <img
          v-else
          :src="require(`../assets/RankedEmblems/${ranks[GET_PROFILE_DATA.lol.rankedLeagueTier]}-${GET_PROFILE_DATA.lol.rankedLeagueTier.toLowerCase()}${getDivision(GET_PROFILE_DATA.lol.rankedLeagueDivision)}.png`)"
          alt=""
        >
      </div>
      <div
        v-if="rank == false"
        class="data"
      >
        <div class="top">
          {{ points }} point
        </div>
        <div class="bottom">
          {{ name }}
        </div>
      </div>
      <div
        v-else
        class="data"
      >
        <div
          style="    text-transform: capitalize;"
          class="top"
        >
          {{ GET_PROFILE_DATA.lol.rankedLeagueTier }} {{ highElo ? '' : GET_PROFILE_DATA.lol.rankedLeagueDivision }}
        </div>
        <div class="bottom">
          {{ GET_PROFILE_DATA.lol.rankedWins }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['points', 'label', 'name', 'image', 'rank', 'version'],
  data: () => ({
    divisions: {
      I: 1, II: 2, III: 3, IV: 4,
    },
    highElo: false,
    ranks: {
      iron: 'a',
      bronze: 'b',
      silver: 'c',
      gold: 'd',
      platinum: 'e',
      diamond: 'f',
      grandmaster: 'g',
      master: 'h',
      challenger: 'i',
    },
  }),
  computed: {
    ...mapGetters(['GET_PROFILE_DATA']),
  },
  mounted() {
    this.getDivision(this.GET_PROFILE_DATA.lol.rankedLeagueDivision);
  },
  methods: {
    getDivision(num) {
      let div = null;
      if (this.GET_PROFILE_DATA.lol.rankedLeagueTier === 'challenger' || this.GET_PROFILE_DATA.lol.rankedLeagueTier === 'master' || this.GET_PROFILE_DATA.lol.rankedLeagueTier === 'grandmaster') {
        this.highElo = true;
        return '';
      }
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(this.divisions)) {
        // eslint-disable-next-line eqeqeq
        if (num == key) div = value;
      }
      this.highElo = false;
      return `_${div}`;
    },
  },
};
</script>

<style lang='scss'>
.card-container{
    h3{
        color:rgba(254, 254, 254, 0.67);
    }
    .card{
    background-color: #090809;
    width: 320px;
    margin-top: 1.01em;
    height: 153px;
    padding: 1.8em;
    display: flex;
    align-items: center;
    border-radius: 0.7em;
    .data{
        width:72%;
        height: 100%;
        margin-left: 1.2em;
        .top,.bottom{
            background-color:#0F0E0F;
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .top{
            height:70%;
            color:#fff;
            border-top-left-radius: 17px;
            border-top-right-radius: 17px;
            margin-bottom:0.3em;

        }
        .bottom{
            height:30%;
            border-bottom-left-radius: 17px;
            border-bottom-right-radius: 17px;
        }

    }
    .image-box{
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.5em;
        background-color:#0F0E0F;
        width: 40%;
        height: 84%;
        border-radius: 1.2em;
        img{
        width: 66px;
        border-radius: 50%;
        }
    }
}
}
</style>
