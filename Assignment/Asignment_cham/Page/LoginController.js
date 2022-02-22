window.LoginController = function($scope,$http, $rootScope) {
    $scope.student = [];
    $http.get(studentsApiUrl).then(function(response) {
        $scope.students = response.data;
    });
    $scope.login = (username, password) => {
        $scope.students.forEach(st => {
            if (st.username == username) {
                if (st.password == password) {
                   // console.log(st);
                    $scope.student = st;
                    window.location.href = "#!/";
                } else {
                }
                
            }  check(); 
    })}
    var check = () => {
        console.log($scope.student);
    }
}
