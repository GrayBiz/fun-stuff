//MODULE
var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

//ROUTES
myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    //This is the 'homepage' of the app. this will be where the user's inbox is built
    .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'inboxController',
        controllerAs: 'inbox'
    })
    //The email section of the application is constructed based on a specific user id
    .when('/inbox/email/:id', {
        templateUrl: 'views/email.html',
        controller: 'emailController',
        controllerAs: 'email'
    })
    .when('/gmailauth', {
        templateUrl: 'quickstart.html',
        controller: 'emailController'
        
    })
    //if a different url is typed, the user is simply redicrected to /inbox
    .otherwise({
        redirectTo: '/inbox'
    })
});

//CONTROLLERS 

myApp.controller('inboxController', ['$scope', function($scope) {
    
}]);

myApp.controller('emailController', ['$scope', function($scope) {
    
}]);


//FACTORIES

//Setting up the factory used when creating functions that communicate with the API
myApp.factory('inboxFactory', function inboxFactory ($http) {
    // setting up the empty exports object to store private variables
    var exports = {};
    
    exports.getMessages = function () {
        return $http.get('json/emails.json')
            .error(function (data) {
                console.log('There was an error retrieving messages!', data);
        });
    };
    return exports;
});

//PROMISES
//Created to handle functions that take a long time