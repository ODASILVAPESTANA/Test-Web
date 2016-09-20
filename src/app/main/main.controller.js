(function() {
  'use strict';

  angular
    .module('synergy')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($uibModal, apiService, $state, $http) {
    var vm = this;
    var apiHost = 'https://prueba-admision-web.herokuapp.com/';
    var headers= {'Content-type':'application/json'}
    vm.click=function () {
      alert("recuperar contraseña")
    }
   vm.submitForm = function() {


      if (vm.select==undefined) {
          $uibModal.open({

              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              template:'<div class="modal-body red" ><p class="text-center">El Elemento Tipo Es Requerido</p> </div>',


          });
      }else if (vm.user=="" || vm.user==undefined) {
          $uibModal.open({

            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            template:'<div class="modal-body red" ><p class="text-center">El Elemento Usuario Es Requerido</p> </div>'


          });
      }else if (vm.pass=="" || vm.pass==undefined) {
          $uibModal.open({

              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              template:'<div class="modal-body red" ><p class="text-center">El Elemento Contraseña Es Requerido</p> </div>'


            });
      }else{

      var data=  $http.post(apiHost+'session', { "username": vm.user , "password": vm.pass, "type": vm.select }, headers)
      .then(function(response) {
        
        if (response.data.status=='ok') {

          $state.go('home' , {id: response.data.cid});
        }else {
          $uibModal.open({

              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              template:'<div class="modal-body red" ><p class="text-center">Datos inválidosll</p> </div>'


            });
        }
      });




          //var data= apiService.test()


      }
    };

  }
})();
