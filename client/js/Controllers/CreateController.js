app.controller('CreateController', ['$scope', '$http', function($scope, $http){
  //$scope.greeting = "hello"
  //$scope.name1 = $('input[name=name]').val;
  //$scope.place = $('input[name=place]').val;
  //$scope.meal = $('input[name=place]').val;
  //$scope.ingredient = $('input[name=ingredient]').val;
  //$scope.instruction = $('input[name=instruction]').val;
  //$scope.ingredients = [];
  //$scope.instructions = [];
  //$scope.addIng = function($scope) {
  //  var newIng = $scope.ingredient
  //  $scope.ingredients.push(newIng);
  //  recipe.ingredient = "";
  //  };
  //$scope.addIns = function($scope) {
  //  $scope.instructions.push();
  //};

$scope.master = {};
$scope.update = function(recipe) {
  $scope.master = angular.copy(recipe);
  $http.post('/recipes', $scope.master);
};
$scope.reset = function() {
  $scope.recipe = angular.copy($scope.master);
};
//$scope.reset();

$scope.addRecipe = function(recipe) {
  $scope.update(recipe);

  //$scope.reset();
};
}]);
