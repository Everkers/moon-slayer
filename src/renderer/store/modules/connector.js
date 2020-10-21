/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const state = {
  data: null,
  requestData: {},

};

const mutations = {
  SET_CONNECTOR_DATA(state, data) {
    state.data = data;
    state.requestData.url = `${data.protocol}://${data.address}:${data.port}`;
    state.requestData.auth = `Basic ${Buffer.from(`${data.username}:${data.password}`).toString('base64')}`;
  },
};
const getters = {
  GET_CONNECTOR_DATA(state) {
    // SET CLIENT DATA TO STATE
    return state.data;
  },
  GET_REQUEST_DATA(state) {
    return state.requestData;
  },
};
const actions = {
  set_connector_data({ commit }, data) {
    // CALL THE MUTATION AND SEND CLIENT DATA TO IT
    commit('SET_CONNECTOR_DATA', data);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
