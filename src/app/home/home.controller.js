(function() {
  'use strict';

  angular
    .module('synergy')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController( apiService, $state, $http) {
    var vm = this;
    var apiHost = 'https://prueba-admision-web.herokuapp.com/';
    var headers= {'Content-type':'application/json'}

    if ($state.params.id== null) {
    	$state.go('login')
    }
    var data= $http.get(apiHost+'data?cid='+$state.params.id, headers)
    .then(function(response) {
      vm.elements= response.data

    });



  }
})();
