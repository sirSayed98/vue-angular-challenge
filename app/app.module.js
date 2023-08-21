import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import NotFound from './pages/404-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import filterComponent from './components/vue-components/filter.vue';
import store from './store/index';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', {
    store,
    render(h) {
      return h(PerformancePageComponent);
    },
  }));
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
