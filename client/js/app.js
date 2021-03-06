var app = angular.module('KitchenApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'client/views/home.html'
        })
        .when('/topic/:place', {
            controller: 'TopicController',
            templateUrl: 'client/views/topic.html'
        })
        .when('/topic/:place/:meal', {
            controller: 'RecipeController',
            templateUrl: '/client/views/recipe.html'
        })
        .when('/createRecipe', {
            controller: 'CreateController',
            templateUrl: '/client/views/create.html'
        })
        .when('/createCountry', {
            controller: 'CountryController',
            templateUrl: '/client/views/country.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
