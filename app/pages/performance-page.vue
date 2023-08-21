<template>
  <div>
    <h1>Performance Page</h1>
    <br/>
    <performance-chart-component />
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";


export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },

  created() {
    console.log("Performance Page");
    console.log(this);
  }

};
</script>
