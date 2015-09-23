app.controller('RecipeController', ['$scope', '$http', function($scope, $http){
  $scope.name = "Hello"
  $http.get('/api/getrecipes').
    success(function(data, status, headers, config){
      $scope.recipes = data;
    }).
    error(function(data, status, headers, config){
      console.log(error);
    });
//    $scope.recipe = {
//      name: "Spaghetti",
//      meal: "Dinner",
//ingredients: ["pasta", "tomatoes", "oregano"],
//      instructions: ["mix sauce in pan", "boil water", "cook pasta"]
//    };
}]);
