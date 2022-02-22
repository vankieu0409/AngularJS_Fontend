window.RegisterController = function($scope, $http){
    $scope.account = {
        fullname: "",
        username: "",
        password: "",
        gender: false,
        birthday: "",
        schoolfee: 0
    };

    $scope.genderList = [
        {
            id: true,
            value: "Nam"
        },
        {
            id: false,
            value: "Nữ"
        }
    ];

    $scope.createStudent = function(){
        $http.post('http://localhost:3000/students', $scope.account)
        .then(resp => {
            console.log(resp);
        });
    }
}