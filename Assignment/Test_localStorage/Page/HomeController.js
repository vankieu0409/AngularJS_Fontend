app.controller("HomeController", function ($scope, $http, $rootScope) {
  $scope.subjects = [];
  $scope.keyword = "";
  $scope.changeKeyword = function () {
    $http
      .get(`${subjectsApiUrl}?Name_like=${$scope.keyword}`)
      .then(function (response) {
        if (response.statusText == "OK") {
          $scope.subjects = response.data;
        }
      });
  };
  $http.get(subjectsApiUrl).then(function (response) {
    if (response.statusText == "OK") {
      $scope.subjects = response.data;
    }
  });
});
