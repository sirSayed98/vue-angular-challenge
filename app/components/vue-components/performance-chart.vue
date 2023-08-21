<template>
  <div class="c-chart__container">
  <h1>Performance chart</h1>

  </div>

</template>

<script>
import { LineChart } from "echarts/charts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";


import {
GridComponent, TitleComponent,
TooltipComponent, VisualMapComponent
} from "echarts/components";



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




  created(){
    console.log(this);
  },

};
</script>
