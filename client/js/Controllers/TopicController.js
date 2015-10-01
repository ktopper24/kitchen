app.controller('TopicController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){
  $scope.redirect = function(place, meal) {
    $location.path('/topic/' + place + '/' + meal)
  };
  $scope.place = $routeParams.place;
  $scope.currentPlace = $scope[$scope.place];
  $scope.Italy =
    {
      name: "Italy",
      continent: "Europe",
      breakfastUrl: "https://breadcakesandale.files.wordpress.com/2013/08/cappuccio-spremuta-lieviti-arabo.jpg",
      lunchUrl: "http://cdn.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets/WomansDay/2013/11/21/26076/italian-lunch-melt.jpg",
      dinnerUrl: "http://lalichresources.com/wp-content/uploads/2014/04/Italian-Dinner-700x466.jpg",
      dessertUrl: "http://gracessweetlife.com/wp-content/uploads/2010/06/ccc3-e1381295500919.jpg"
    };
}]);
