app.controller("LoginController" ,function($scope ,$http , $rootScope) {
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
                    window.location.href = "#!/";
                    return;
                } else {
                    alert("Password is incorrect");
                    $rootScope.student = null;
                    return;
                }   
            }
    })}
});
// i want to use the login function in the home controller
// but i can't use the login function in the home controller