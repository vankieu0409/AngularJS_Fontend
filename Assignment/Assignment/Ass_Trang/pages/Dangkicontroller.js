app.controller("Dangkicontroller", function ($scope, $http, $location) {
  $scope.gioitinh = "true";
  if ($scope.sex == "Nữ") {
    $scope.gioitinh = "false";
  }

  $scope.dangki = function () {
    // $scope.username="";
    $http.post("http://localhost:3000/students", {
      username: $scope.username,
      password: $scope.password,
      fullname: $scope.fullname,
      email: $scope.email,
      gender: $scope.gioitinh,
      birthday: $scope.birthday,
      schoolfee: "2000000",
      marks: "0",
    });
    alert("dang ki thanh cong");
    $location.path("/Homepage");
  };
});
