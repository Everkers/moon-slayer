/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const axios = require('axios');

const state = {
  champions: null,
  version: null,
  currentChampSkins: null,
  highestMastery: null,
};
const getters = {
  // GET CHAMPIONS
  CHAMPIONS_STATE(state) {
    return state.champions;
  },
  GET_HIGHEST_MASTERY_CHAMP(state) {
    return state.highestMastery;
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
  async GET_USER_DATA({ getters, commit }) {
    // Get User data by sammoner name
    const { data: response } = await axios.get(`https://${getters.GET_PROFILE_DATA.platformId}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${getters.GET_PROFILE_DATA.name}?api_key=RGAPI-ef20b335-d561-4963-880c-ccbee3a1e030`);
    const { data: mastery } = await axios.get(`https://${getters.GET_PROFILE_DATA.platformId}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${response.id}?api_key=RGAPI-ef20b335-d561-4963-880c-ccbee3a1e030`);
    const { data: champions } = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json');
    Object.keys(champions.data).forEach((key) => {
      const item = champions.data[key];
      if (item.key === mastery[0].championId.toString()) {
        // eslint-disable-next-line prefer-destructuring
        item.mastery = mastery[0];
        commit('SET_HIGHEST_MASTERY_CHAMP', item);
      }
    });
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
    commit('SET_CHAMPIONS ', response);
  },

};


const mutations = {
  SET_HIGHEST_MASTERY_CHAMP(state, champion) {
    state.highestMastery = champion;
  },
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
