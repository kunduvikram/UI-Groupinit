var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/Assess',
                        {
                            templateUrl: 'Home/Assess',
                            controller: 'assessController'
                        });
    $routeProvider.when('/Plan',
                       {
                           templateUrl: 'Home/Plan',
                           controller: 'planController'
                       });
    $routeProvider.when('/Review',
                      {
                          templateUrl: 'Home/Review',
                          controller: 'reviewController'
                      });
	$routeProvider.when('/RestCode',
                      {
                          templateUrl: 'RestCode/Viewiew',
                          controller: 'RestCodeController'
                      });
    $routeProvider.otherwise(
                   {
                       redirectTo: '/'
                   });
}]);
app.service("systmappCRUDService", function ($http) {
        this.systmappList = function () {
            return $http.get("Home/getsystmappList");
        };
    });