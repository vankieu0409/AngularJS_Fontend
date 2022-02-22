window.RegisterController = function ($scope, $http) {
  console.log("1");
  $scope.account = {
    fullname: "",
    username: "",
    password: "",
    gender: false,
    birthday: "",
    mark: "",
  };

  $scope.genderList = [
    {
      id: true,
      value: "Nam",
    },
    {
      id: false,
      value: "Nữ",
    },
  ];
  $scope.createStudent = function () {
    $http
      .post("http://localhost:3000/students", $scope.account)
      .then((resp) => {
        console.log(resp);
        
      });
  };
};
