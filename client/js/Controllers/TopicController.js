app.controller('TopicController', ['$http', '$scope', '$location', '$routeParams', function($http, $scope, $location, $routeParams){
  $scope.place = $routeParams.place;
  $scope.redirect = function(meal) {
    $location.url('/topic/'+ $scope.place + '/' + meal)
  };


    var onComplete = function(response){
      $scope.country = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Error";
    };

    $http.get('/getcountry?country=' + $scope.place)
        .then(onComplete, onError);

  }]);


