angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const getEmployees = () => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees';

    return $http.get(employeesUrl);
  };

  const loadMoreEmployees = (page) => {
    // [Load more empolyess logic goes here]
    const moreEmpolyessURL = `https://fe-task.getsandbox.com/employees?page=${page}`;
    return $http.get(moreEmpolyessURL);
  };

  return {
    getEmployees,
    loadMoreEmployees,
  };
}
