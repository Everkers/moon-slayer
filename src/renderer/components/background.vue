<template>
  <div>
    <div class="champions">
      <div
        v-for="(champion , index) in CHAMPIONS_STATE.data"
        :key="index"
        class="champion"
      >
        <img
          :src="'http://ddragon.leagueoflegends.com/cdn/' + VERSION_STATE + '/img/champion/' + champion.id + '.png' "
          alt=""
        >
        <router-link :to="{name:'champion' , query:{name:champion.id}}">
          {{ champion.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['CHAMPIONS_STATE', 'VERSION_STATE']),
  },
  mounted() {
    this.GET_VERSION();
    this.GET_CHAMPIONS();
  },
  methods: {
    ...mapActions(['GET_VERSION', 'GET_CHAMPIONS']),
  },
};
</script>

<style lang='scss'>
.champions {
    display:flex;
    flex-wrap:wrap;
    .champion{
        display: flex;
        flex-direction: column;
        align-items:center;
        margin-right: 1.5em;
        margin-bottom: 0.8em;
    }
}
</style>
