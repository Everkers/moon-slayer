/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const { request } = require('../../functions');

const state = {
  status: null,
  endpoints: {
    presetIcon: '/lol-summoner/v1/current-summoner/icon/',
    status: '/lol-chat/v1/me/',
    aram: '/lol-champ-select/v1/team-boost/purchase/',
    profile: '/lol-summoner/v1/current-summoner/summoner-profile/',
    friends: '/lol-chat/v1/friends/',
    conversations: '/lol-chat/v1/conversations/',
  },
};
const actions = {
  SET_RANK_STATUS({ getters, state }, input) {
    request(getters.GET_REQUEST_DATA, 'PUT', JSON.stringify(input), state.endpoints.status);
  },
  SET_STATUS({ getters, state }, input) {
    request(getters.GET_REQUEST_DATA, 'PUT', JSON.stringify({ statusMessage: input }), state.endpoints.status);
  },
  SET_BACKGROUND({ getters, state }, input) {
    request(getters.GET_REQUEST_DATA, 'POST', JSON.stringify({ key: 'backgroundSkinId', value: input }), state.endpoints.profile);
  },
};
const mutations = {

};
export default {
  state,
  mutations,
  actions,
};
