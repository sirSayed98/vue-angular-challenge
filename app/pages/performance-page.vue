<template>
  <div class="c-dashboard">
    <div class="c-filters__container center">

      <div class="date__container">
        <label for="start_date">Start Date:</label>
        <input type="date" v-model="start_date">
      </div>

      <div class="date__container">
        <label>End Date:</label>
        <input type="date" v-model="end_date">
      </div>

      <div class="date__container">
        <button @click="setRangeValues" class="c-button">Filter</button>
      </div>

      <div>

      </div>

    </div>
    <div class="c-dashboard__header">
      <performance-chart-component />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import moment from "moment";

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },

  created() {
    this.$store.dispatch('getCharts')
  },

  data() {
    return {
      start_date: null,
      end_date: null
    }
  },

  methods: {
    setRangeValues() {

      if (this.start_date === null || this.end_date === null)
      {
        alert('you have to select Start date and End date')
        return
      }

      else if (moment(this.start_date).isAfter(this.end_date))
      {
        alert('End date should be after Start date');
        return
      }
      let start = moment(this.start_date, "YYYY-MM-DD").add(-1, 'days')
      let end = moment(this.end_date, "YYYY-MM-DD").add(1, 'days')

      this.$store.dispatch('setRange', { start_date: start, end_date: end })

    }
  },

};
</script>
