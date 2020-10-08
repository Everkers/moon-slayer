/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { SnackbarProgrammatic } from 'buefy';

import { request } from '../../functions';

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
  async GET_WALLPAPER({ getters, state }) {
    await request(getters.GET_REQUEST_DATA, 'GET', '', state.endpoints.profile);
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
};
