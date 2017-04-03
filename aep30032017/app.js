'use strict';
var app = angular.module("app", [
  "ngRoute"
  ]);
app.config(function($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
  .when('/cadastros/manterproduto', {
    templateUrl: 'templates/listar.html',
    controller: 'produtoCtrl'
  })
  .when('/cadastros/', {
    templateUrl: 'templates/sushi.html',
    controller: 'sushiCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
