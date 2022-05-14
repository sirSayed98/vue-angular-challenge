angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = () => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees';

    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = () => {
    // [Load more empolyess logic goes here]
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
