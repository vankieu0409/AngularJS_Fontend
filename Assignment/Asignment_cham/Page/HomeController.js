//var subjectsApiUrl = "http://localhost:3000/subjects";
window.HomeController = function($scope, $http,) {
  $scope.subjects = [];
  $scope.keyword = "";

  $scope.changeKeyword = function(){
    $http.get(`${subjectsApiUrl}?Name_like=${$scope.keyword}`)
      .then(function(response){
        if(response.statusText == "OK"){
          $scope.subjects = response.data;
        }
      })
  }

  $http.get(subjectsApiUrl)
    .then(function(response) {
      if(response.statusText == "OK"){
        $scope.subjects = response.data;
      }
    })

  // $http.post('http://localhost:3000/students', {
  //   username: "tuanba",
  //   password: "iloveyou",
  //   fullname: "Bùi Anh Tuấn",
  //   email: "tuanba@fpt.edu.vn",
  //   gender: "true",
  //   birthday: "1995-12-21",
  //   schoolfee: "1500000",
  //   marks: "0"
  // })
};