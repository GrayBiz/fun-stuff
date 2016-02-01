//MODULE
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

//ROUTES
myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
});

//CONTROLLERS 

myApp.controller('homeController', ['$scope', function($scope) {
    
}]);
