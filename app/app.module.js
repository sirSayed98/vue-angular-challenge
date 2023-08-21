import 'ngVue';
import 'ngVue/build/plugins.js';
import Vue from 'vue';
import filterComponent from './components/vue-components/filter.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import NotFound from './pages/404-page.vue';
import PerformancePageComponent from './pages/performance-page.vue';
import store from './store/index';

const app = angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

app.config($ngVueProvider => {
  $ngVueProvider.setRootVueInstanceProps({ store });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('filterComponent', filterComponent));
});

angular.module('appModule').directive('vNotFound', (createVueComponent) => {
  return createVueComponent(Vue.component('notFound', NotFound));
});
