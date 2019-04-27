'use strict';

angular.
  module('timeline').
  component('timeline', {
    templateUrl: '/src/timeline/timeline.template.html',
    controller: ['$scope', '$routeParams', 'login_service', function TimelineController($scope, $routeParams, login_service) {

      $scope.user = {
        cid: $routeParams.cid
      }
      $scope.userInfo = undefined;

      login_service.getInfo($scope.user.cid)
          .then(function success(response){
            console.log(response);
            $scope.userInfo = response.data;
            console.log($scope.userInfo);
          }, function error(error){
            console.log(error);
          })


    }]
  });