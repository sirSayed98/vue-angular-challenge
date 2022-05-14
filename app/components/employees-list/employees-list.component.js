angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      keyword: '<',
    },
  });

angular
  .module('appModule')
  .filter('highlight', function ($sce) {
    return function (input, searchVal) {
      let filteredText = input;
      if (searchVal !== '') {
        let pattern = new RegExp(searchVal, 'gi');
        filteredText = input.replace(pattern, match=> `<span class="highlighted">${match}</span>`);
      }
      return $sce.trustAsHtml(filteredText);
    };
  });

function EmployeesListComponent() {}
