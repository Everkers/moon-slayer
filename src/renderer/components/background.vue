<template>
  <div class="wallpaper-changer">
    <div class="head">
      <h1 class="is-size-3 has-text-weight-bold has-text-light">
        Change Profile Background
      </h1>
      <b-field>
        <b-input
          v-model="search"
          placeholder="Search for a champion"
          type="search"
          @keyup.enter.native="searchChampion()"
        />
        <p class="control">
          <b-button
            class="button is-primary"
            @click="searchChampion()"
          >
            Search
          </b-button>
        </p>
      </b-field>
    </div>
    <div
      v-if="searchRes.length === 0 || !search"
      class="champions"
    >
      <router-link
        v-for="(champion , index) in CHAMPIONS_STATE.data"
        :key="index"
        :to="{name:'champion' , query:{name:champion.id}}"
      >
        <championCard
          :image="champion.id"
          :name="champion.name"
          :subname="champion.title"
        />
      </router-link>
    </div>
    <div
      v-else
      class="champions"
    >
      <router-link
        v-for="(champion , index) in searchRes"
        :key="index"
        :to="{name:'champion' , query:{name:champion.id}}"
      >
        <championCard
          :image="champion.id"
          :name="champion.name"
          :subname="champion.title"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import { mapActions, mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import championCard from './champion-card';

export default {
  data: () => ({
    search: null,
    searchRes: [],
  }),
  computed: {
    ...mapGetters(['CHAMPIONS_STATE', 'VERSION_STATE']),
  },
  watch: {
    search(value) {
      if (!value) this.searchRes = [];
    },
  },
  components: {
    championCard,
  },
  mounted() {
    this.GET_VERSION();
    this.GET_CHAMPIONS();
  },
  methods: {
    searchChampion() {
      const champions = Object.keys(this.$store.getters.CHAMPIONS_STATE.data);
      const result = champions.filter(name => name.match(new RegExp(this.search, 'gi')));
      if (result) {
        this.searchRes = [];
        result.forEach(champ =>
          this.searchRes.push(this.$store.getters.CHAMPIONS_STATE.data[champ]));
      } else this.searchRes = null;
    },
    ...mapActions(['GET_VERSION', 'GET_CHAMPIONS']),
  },
};
</script>

<style lang='scss'>
.wallpaper-changer{
  padding-top: 8em;
  .head{
    h1{
      margin-bottom: 0.5em;
    }
    input{
      background-color:#090809 !important;
      border:unset;
      color:#A7A7A7;
      &::placeholder{
        color:#A7A7A7;
      }
    }
  }

  .champions{
    margin-top: 2.5em;
    display: flex;
    flex-wrap:wrap;
  }
}
// .champions {
//     display:flex;
//     flex-wrap:wrap;
//     .champion{
//         display: flex;
//         flex-direction: column;
//         align-items:center;
//         margin-right: 1.5em;
//         margin-bottom: 0.8em;
//     }
// }
</style>
