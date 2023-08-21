<template>
  <h1>Vue component</h1>

</template>

<script>

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";


import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";


use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {

  name: "PerformanceChartComponent",


  components: {
    VChart,
  },

  created(){
    console.log("Performance chart");
    console.log(this);
  }


};
</script>
