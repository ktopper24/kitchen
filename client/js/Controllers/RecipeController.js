app.controller('RecipeController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.place = $routeParams.place;
  $scope.meal = $routeParams.meal;

  var onComplete = function(response){
    $scope.recipes = response.data;
  };

  var onError = function(reason) {
    $scope.error = "Error";
  };

  $http.get('/recipes')
    .then(onComplete, onError);
;
}]);
