app.controller("DangNhapController" ,function($scope ,$http , $rootScope) {
    $http.get(studentsApiUrl).then(function(response) {
        $scope.students = response.data;
    });
    $scope.login = (username, password) => {
        $scope.students.forEach(st => {
            if (st.username == username) {
                if (st.password == password) {
                    $rootScope.student = st;
                    console.log(st);
                    window.localStorage.setItem("student", JSON.stringify(st));
                    window.location.href = "#!/Homepage";
                    return;
                } else {
                    alert("Password is incorrect");
                    $rootScope.student = null;
                    return;
                }   
            }
    })}
});