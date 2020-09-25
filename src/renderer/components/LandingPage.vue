<template>
  <div>
    <button @click="SET_STATUS(status)">
      click me
    </button>
    <input
      v-model="status"
      type="text"
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const LCUConnector = require('lcu-connector');
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const connector = new LCUConnector();
connector.start();
export default {
  name: 'LandingPage',
  data: () => ({
    status: null,
  }),
  mounted() {
    connector.on('connect', (data) => {
      // SET CLIENT DATA TO THE STATE
      this.set_connector_data(data);
    });
  },
  methods: {
    ...mapActions(['set_connector_data', 'SET_STATUS']),
  },

};
</script>
