<template>
  <div class="wallpaper-changer">
    <div class="head">
      <h1 class="is-size-3 has-text-weight-bold has-text-light">
        {{ $route.query.name }} Skins
      </h1>
      <b-field>
        <b-input
          v-model="search"
          placeholder="Search for a skin"
          type="search"
          @keyup.enter.native="searchSkin()"
        />
        <p class="control">
          <b-button
            class="button is-primary"
            @click="searchSkin()"
          >
            Search
          </b-button>
        </p>
      </b-field>
    </div>
    <div
      v-if="searchRes.length === 0 || !search"
      class="skins"
    >
      <div
        v-for="(skin , index) in CHAMPION_SKINS_STATE"
        :key="index"
        class="skin"
      >
        <div class="actions">
          <h1 class="has-text-light is-size-4">
            {{ skin.name }}
          </h1>
          <b-button
            type="is-primary"
            size="is-small"
            @click="SET_BACKGROUND({id:skin.id , name:skin.name})"
          >
            Set Image
          </b-button>
        </div>
        <div class="overlay" />
        <img
          :src="'https://cdn.communitydragon.org/' + VERSION_STATE + '/champion/'+$route.query.name + '/splash-art/skin/' + skin.num "
          alt=""
        >
      </div>
    </div>
    <div
      v-else
      class="skins"
    >
      <div
        v-for="(skin , index) in searchRes"
        :key="index"
        class="skin"
      >
        <div class="actions">
          <h1 class="has-text-light is-size-4">
            {{ skin.name }}
          </h1>
          <b-button
            type="is-primary"
            size="is-small"
            @click="SET_BACKGROUND({id:skin.id , name:skin.name})"
          >
            Set Image
          </b-button>
        </div>
        <div class="overlay" />
        <img
          :src="'https://cdn.communitydragon.org/' + VERSION_STATE + '/champion/'+$route.query.name + '/splash-art/skin/' + skin.num "
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    search: null,
    searchRes: [],
  }),
  computed: {
    ...mapGetters(['CHAMPION_SKINS_STATE', 'VERSION_STATE']),
  },
  watch: {
    search(value) {
      if (!value) this.searchRes = [];
    },
  },
  async mounted() {
    this.GET_CHAMPION_SKINS(this.$route.query.name);
  },
  methods: {
    searchSkin() {
      const skins = this.$store.getters.CHAMPION_SKINS_STATE;
      const result = skins.filter(s => s.name.match(new RegExp(this.search, 'gi')));
      if (result) {
        this.searchRes = [];
        this.searchRes = result;
      } else this.searchRes = null;
    },
    ...mapActions(['GET_CHAMPION_SKINS', 'SET_BACKGROUND']),

  },

};
</script>

<style lang='scss' >
.wallpaper-changer{
  .skins{
    margin-top: 2.5em;
    display:flex;
    flex-wrap:wrap;
    .skin{
      margin-right:1.2em;
      margin-bottom:1.2em;
      position: relative;
      width: 22em;
      height: 12em;
      overflow: hidden;
      border-radius: 0.5em;
      .overlay{
        width: 100%;
        height:100%;
        position: absolute;
        transition:all ease 500ms 200ms;
        background-color:rgb(0, 0, 0);
        opacity:0;
      }
      &:hover{
        .overlay{
          opacity:0.5;
        }
        .actions{
          opacity:1
        }
      }
      .actions{
        text-align:center;
        h1{
          margin-bottom:0.5em;
        }
        position: absolute;
        left: 50%;
        z-index: 1;
        top: 50%;
        opacity:0;
        transform: translate(-50%,-50%);
        transition:all ease 500ms 300ms;

      }
      img{
        width:100%;
        height:100%;
        object-fit: cover;
      }
    }
  }
}
</style>
