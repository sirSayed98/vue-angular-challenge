/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
// Load Vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
  state: {
    start_date: null,
    end_date: null,
    chartDataStore: [],
    chartDataDisplayed: [],
  },
  mutations: {
    setCharts(state, data) {
      state.chartDataStore = data;
      state.chartDataDisplayed = data;
    },
    setRangeState(state, data) {
      const { start_date, end_date } = data;
      state.start_date = start_date;
      state.end_date = end_date;
    },
    setChartDisplayed(state, data) {
      const { start_date, end_date } = data;

      let filtered = state.chartDataStore.filter(date => {
        let current = moment(date.date_ms).format('YYYY-MM-DD');
        if (moment(current).isBetween(start_date, end_date)) { return date; }
      });

      state.chartDataDisplayed = filtered;
    },
  },
  actions: {
    getCharts({ commit }) {
      axios.get('https://fe-task.getsandbox.com/performance').then(res => {
        commit('setCharts', res.data);
      });
    },
    setRange({ commit }, data) {
      commit('setRangeState', data);
      commit('setChartDisplayed', data);
    },
  },

});
