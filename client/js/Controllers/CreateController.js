app.controller('CreateController', ['$scope', '$http', function($scope, $http){
  $scope.reset = function() {
    $scope.recipe = {};
  };



  $scope.addRecipe = function() {

    if($scope.recipe.recipeName && $scope.recipe.place && $scope.recipe.meal && $scope.ingredients && $scope.instructions) {
      var fullRecipe = {
        recipeName: $scope.recipe.recipeName,
        place: $scope.recipe.place,
        meal: $scope.recipe.meal,
        ingredients: $scope.ingredients,
        instructions: $scope.instructions
      };

      $http.post('/recipes', fullRecipe);
      $scope.reset();

  }
    else {
      alert("Please complete all fields!");
    }
  };


  $scope.ingredients = [];
  $scope.instructions = [];
  $scope.addIng = function() {
    var newIng = {ingredient: $scope.recipe.ingredient};
    $scope.ingredients.push(newIng);
    $scope.recipe.ingredient = "";
    };

  $scope.addIns = function() {
    var newIns = {instruction: $scope.recipe.instruction};
    $scope.instructions.push(newIns);
    $scope.recipe.instruction = "";
  };
}]);