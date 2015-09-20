app.controller('HomeController', ['$scope', '$location', function($scope, $location){
  $scope.redirect = function(topic) {
      $location.path(topic);
  };

}]);
