app.controller(
  "TestProcessController",
  function ($scope, $http, $routeParams, $interval) {
    $scope.apiUrl = "http://localhost:3000";
    $scope.questions = [];
    $scope.score = 0;
    $scope.remainingTime = 30;
    $scope.isSubmit = false;
    $scope.radioChange = function (value) {
      console.log(value);
    };

    $scope.countAnswers = function () {
      var count = 0;
      $scope.questions.forEach((item, i) => {
        if (item.userChoose != undefined) {
          count++;
        }
      });
      return count;
    };

    $scope.timeInterval = $interval(function () {
      $scope.remainingTime = $scope.remainingTime - 1;
      if ($scope.remainingTime == 0) {
        $scope.submitExercise();
        $interval.cancel($scope.timeInterval);
      }
    }, 1000);

    $scope.submitExercise = function () {
      $scope.isSubmit = true;
      var score = 0;
      $scope.questions.forEach((item) => {
        if (item.userChoose != undefined && item.userChoose == item.AnswerId) {
          score += item.Marks;
        }
      });
      $interval.cancel($scope.timeInterval);
      $scope.remainingTime = 0;
      alert(`Bạn đã đạt ${score} điểm`);
    };

    $scope.chooseAnswer = function (qId, aId) {
      $scope.questions.forEach((item, index) => {
        if (item.Id == qId) {
          item.userChoose = aId;
        }
      });
    };

    $http.get(`${$scope.apiUrl}/${$routeParams.subjectId}`).then((response) => {
      if (response.statusText == "OK") {
        // response.data - bộ câu hỏi (rất nhiều)
        // lấy random 10 câu hỏi trong bộ này
        while ($scope.questions.length < 10) {
          var randomIndex = Math.floor(Math.random() * response.data.length);
          const tmpQuestion = response.data[randomIndex];
          // array.indexOf(object) => return -1 nếu object chưa có trong mảng
          // => return index của phần tử nếu object trùng 1 phần tử nào đó trong mảng
          if ($scope.questions.indexOf(tmpQuestion) == -1) {
            $scope.questions.push(tmpQuestion);
          }
        }
      }
    });
  }
);
