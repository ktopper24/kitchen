app.controller('CreateController', ['$scope', '$http', function($scope, $http){
  $scope.greeting = "hello"
  $scope.name1 = $('input[name=name]').val;
  $scope.place = $('input[name=place]').val;
  $scope.meal = $('input[name=place]').val;
  $scope.ingredient = $('input[name=ingredient]').val;
  $scope.instruction = $('input[name=instruction]').val;
  $scope.ingredients = [];
  $scope.instructions = [];
  $scope.addIng = function($scope) {
    var newIng = $scope.ingredient
    $scope.ingredients.push(newIng);
    recipe.ingredient = "";
    };
  $scope.addIns = function($scope) {
    $scope.instructions.push();
  };

$scope.addRecipe = function($scope) {
  var newRecipe = {
    name: $scope.name1,
    place: $scope.place,
    meal: $scope.meal,
    ingredients: $scope.ingredients,
    instructions: $scope.instructions
  };
  $http.post('/recipes', newRecipe);
};
}]);
