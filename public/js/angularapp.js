var app = angular.module("app", ['ngAnimate', 'mgcrea.ngStrap']);

angular.module('app')
  .controller('indexController', ['$scope', '$templateCache', '$http', '$location', '$window', function($scope, $templateCache, $http, $location, $window) {
      $scope.remedios = ['falló'];
      $scope.ciudad="Seleccione";
      $scope.centroofarm='';
      $scope.remediosel = '';
      $scope.accion_centroofarm = '';
      console.log($scope.centroofarm);
      console.log($scope.ciudad);
      $scope.$watch('ciudad', function(newvalue, oldValue){
        console.log(newvalue);
      });

      $scope.$watch('centroofarm', function(newvalue, oldValue){
        if(newvalue=='farmacia'){
          $scope.accion_centroofarm='farmacia';
        }
        else if (newvalue=='centromedico') {
          $scope.accion_centroofarm='/centrosmedicos';
        }
    });


      $http.get('/jsonRemedios').then(fungetexito, funerror);

      function fungetexito(data) {
        console.log(data.data);
        $scope.remedios = JSON.parse(data.data);
}
function funerror(err) {
  console.log(err)
}
  }])
