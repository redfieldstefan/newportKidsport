'use strict';

require('angular/angular');
require('angular-route');
require('angular-sanitize');
require('angular-animate');

var kidsportApp = angular.module('kidsportApp', ['ngRoute','ngSanitize', 'ngAnimate']);

//controllers
require('./controllers/main_controller')(kidsportApp);

//directives
require('./directives/nav_directive')(kidsportApp);
require('./directives/footer_directive')(kidsportApp);
//routes

kidsportApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: 'MainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'MainController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'MainController'
    })
    .when('/fabrics', {
      templateUrl: 'views/fabrics.html',
      controller: 'MainController'
    })
    .when('/stockist', {
      templateUrl: 'views/stockist.html',
      controller: 'MainController'
    })
    .when('/apparel/raincape', {
      templateUrl: 'views/apparel/raincape.html',
      controller: 'MainController'
    })
    .when('/apparel/babycape', {
      templateUrl: 'views/apparel/babycape.html',
      controller: 'MainController'
    })
    .when('/apparel/rainbubble', {
      templateUrl: 'views/apparel/rainbubble.html',
      controller: 'MainController'
    })
    .otherwise({redirectTo:'/'});
}]);

