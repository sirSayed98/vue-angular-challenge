angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.keyword = '';

  activate();

  homePageVm.highlightSearch = (keyword) => {
    homePageVm.keyword = keyword;
  };

  function activate() {
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  }
}
