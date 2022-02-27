app.controller("ChangePasswordController", function($scope, $http, $rootScope){
    $scope.apiUrl = "http://localhost:3000";
    $scope.changepassword = (oldpassword,password,renewpassword) => {
        console.log($rootScope.student);
        console.log("oldpassword : ",oldpassword,"password : ",password,"renewpassword : ",renewpassword);
        if(oldpassword == $rootScope.student.password){
            if(password == renewpassword){
                $rootScope.student.password = password;
                $http.patch("http://localhost:3000/students",$rootScope.student).then(function(res){
                    alert("Đổi mật khẩu thành công");
                });
            }
            else{
                alert("Mật khẩu mới không trùng khớp");
            }
        }
        else{
            alert("Sai mật khẩu");
        }
    }
});
