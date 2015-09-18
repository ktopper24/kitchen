app.controller('RecipeController', ['$scope', function($scope){
    $scope.name = 'Cinnamon Roll',
    $scope.ingredients = ['flour', 'sugar', 'cinnamon'],
    $scope.instructions = ['preheat oven to 400', 'mix all ingredients', 'bake 10 minutes']
}]);