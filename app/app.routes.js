angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      });
  });
