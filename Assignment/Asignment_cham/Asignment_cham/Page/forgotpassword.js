app.controller("FogotpasswordController" , function ($scope, $http) {
    $scope.account = null;
    $scope.forgot = (username,name)=> {
        $http.get('http://localhost:3000/students').then((resp) => {
            resp.data.forEach(element => {
                if(element.username == username && element.fullname == name){
                    $scope.account = resp.data.filter(x=>x.username == username && x.fullname == name)[0];
                    console.log($scope.account);
                }
            });
            if($scope.account== null){
                alert("Tài khoản không tồn tại");
            }
        });
    };
    $scope.change = (newPassword,confirmPassword) => {
            if(newPassword == confirmPassword){
            $scope.account.password = newPassword;
            $http.put('http://localhost:3000/students/'+$scope.account.id,$scope.account).then((resp) => {
                alert("Đổi mật khẩu thành công");
            });
        }else{
            alert("Mật khẩu không trùng khớp");
        }
    }
});