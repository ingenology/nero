'use strict';

angular.module('neroApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/entryList.html',
                controller: 'MainCtrl'
            })
            .when('/fieldGuide', {
                templateUrl: 'views/fieldGuide.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'MainCtrl'
            })
            .when('/addEntry', {
                templateUrl: 'views/addEntry.html',
                controller: 'MainCtrl'
            })
            .when('/entryDetail', {
                templateUrl: 'views/entryDetail.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });