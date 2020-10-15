/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { SnackbarProgrammatic } from 'buefy';

import { request } from '../../functions';

const state = {
  status: null,
  userData: null,
  endpoints: {
    presetIcon: '/lol-summoner/v1/current-summoner/icon/',
    status: '/lol-chat/v1/me/',
    aram: '/lol-champ-select/v1/team-boost/purchase/',
    profile: '/lol-summoner/v1/current-summoner/summoner-profile/',
    friends: '/lol-chat/v1/friends/',
    conversations: '/lol-chat/v1/conversations/',
  },
};
const getters = {
  GET_PROFILE_DATA(state) {
    return state.userData;
  },
};
const actions = {
  async SET_PROFILE({ getters, state }) {
    const data = await request(getters.GET_REQUEST_DATA, 'GET', '', state.endpoints.status);
    state.userData = JSON.parse(data.body);
  },
  SET_RANK_STATUS({ getters, state }, input) {
    try {
      request(getters.GET_REQUEST_DATA, 'PUT', JSON.stringify(input), state.endpoints.status);
      SnackbarProgrammatic.open('Rank has been changed');
    } catch (err) {
      SnackbarProgrammatic.open(err.message);
    }
  },
  async SET_STATUS({ getters, state }, input) {
    try {
      await request(getters.GET_REQUEST_DATA, 'PUT', JSON.stringify({ statusMessage: input }), state.endpoints.status);
      SnackbarProgrammatic.open('Status has been changed');
    } catch (err) {
      SnackbarProgrammatic.open(err.message);
    }
  },
  async SET_BACKGROUND({ getters, state }, data) {
    try {
      await request(getters.GET_REQUEST_DATA, 'POST', JSON.stringify({ key: 'backgroundSkinId', value: data.id }), state.endpoints.profile);
      SnackbarProgrammatic.open(`${data.name} splash has been set to your profile wallpaper`);
    } catch (err) {
      SnackbarProgrammatic.open(err.message);
    }
  },
};
const mutations = {

};
export default {
  state,
  mutations,
  actions,
  getters,
};
