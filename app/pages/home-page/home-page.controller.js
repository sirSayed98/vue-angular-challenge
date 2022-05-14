angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.keyword = '';
  homePageVm.currentPage = 1;
  homePageVm.maxPage = 1;
  homePageVm.loading = false;
  homePageVm.hasMore = true;

  activate();

  homePageVm.highlightSearch = (keyword) => {
    homePageVm.keyword = keyword;
  };

  function activate() {
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
      homePageVm.maxPage = data.pages;
    });
  }

  homePageVm.loadMoreEmployees = () => {
    homePageVm.currentPage += 1;
    homePageVm.loading = true;
    Employees.loadMoreEmployees(homePageVm.currentPage).then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
      homePageVm.hasMore = (homePageVm.currentPage !== homePageVm.maxPage);
      homePageVm.loading = false;
    });
  };
}
