const homePage = {
  name: 'app',
  url: '/',
  templateUrl: './pages/home-page/home-page.html',
  controller: 'homeController',
  controllerAs: 'homePageVm',
};
const performancePage = {
  name: 'team-performance',
  url: '/team-performance',
  template: '<v-performance-page></v-performance-page>',
};

angular
  .module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider) => {
    $stateProvider
      .state(homePage)
      .state(performancePage)
      .state('404server', {
        template: '<v-not-found></v-not-found>',
      })
      .state('404client', {
        url: '*path',
        template: '<v-not-found></v-not-found>',
      });
  });
