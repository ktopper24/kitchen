app.controller('HomeController', ['$scope', '$location', function($scope, $location){
  $scope.redirect = function(place) {
      $location.path('/topic/' + place);
  };

}]);
