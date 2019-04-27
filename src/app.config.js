'use strict';

angular.
  module('synergyApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/login', {
          template: '<login></login>'
        }).
        when('/timeline/:cid', {
          template: '<timeline></timeline>'
        }).
        otherwise('/login');
    }
  ]);