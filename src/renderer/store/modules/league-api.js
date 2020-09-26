/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const axios = require('axios');

const state = {
  champions: null,
  version: null,
  currentChampSkins: null,
};
const getters = {
  // GET CHAMPIONS
  CHAMPIONS_STATE(state) {
    return state.champions;
  },
  // GET CURRENT CHAMP SKINS
  CHAMPION_SKINS_STATE(state) {
    return state.currentChampSkins;
  },
  // GET CURRENT VERSION
  VERSION_STATE(state) {
    return state.version;
  },
};
const actions = {
  async GET_VERSION({ commit }) {
    // get current league version
    const { data: response } = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
    // call mutation with version to set current version to state
    commit('SET_VERSION', response);
  },
  async GET_CHAMPION_SKINS({ commit, state }, id) {
    // get champion skins
    const { data: response } = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${state.version}/data/en_US/champion/${id}.json`);
    commit('SET_CHAMION_SKINS', response.data[id]);
  },
  async GET_CHAMPIONS({ commit, state }) {
    // get champions
    const { data: response } = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${state.version}/data/en_US/champion.json`);
    // call mutation with champions to set all champions to state
    commit('SET_CHAMPIONS   ', response);
  },

};
const mutations = {
  SET_CHAMPIONS(state, champions) {
    state.champions = champions.data;
  },
  SET_CHAMION_SKINS(state, data) {
    state.currentChampSkins = data.skins;
  },
  SET_VERSION(state, version) {
    state[version] = version;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
