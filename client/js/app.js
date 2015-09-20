var app = angular.module('KitchenApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/topic', {
            controller: 'TopicController',
            templateUrl: 'views/topic.html'
        })
        .when('/:topic/:id', {
            controller: 'RecipeController',
            templateUrl: 'views/recipe.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
