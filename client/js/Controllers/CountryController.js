app.controller('CountryController', ['$scope', '$http', function($scope, $http) {
    $scope.reset = function () {
        $scope.country = {};
    };


    $scope.addCountry = function (){
        $http.post('/countries', $scope.country);
        $scope.reset();

    };
}]);