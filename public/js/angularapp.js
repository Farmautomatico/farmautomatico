var app = angular.module("app", ['ngAnimate', 'mgcrea.ngStrap']);

angular.module('app')
  .controller('indexController', ['$scope', '$templateCache', '$http', '$location', '$window', function($scope, $templateCache, $http, $location, $window) {
    $scope.remedios = [''];
    $scope.enfermedades = [''];
    $scope.enfermedadseleccionada = '';
    $scope.ciudad = $scope.ciudadactual;
    $scope.centroofarm = '';
    $scope.remediosel = '';
    $scope.combodep = [];
    $scope.accion_centroofarm = '';
    console.log($scope.centroofarm);
    console.log($scope.ciudad);
    $scope.$watch('ciudad', function(newvalue, oldValue) {
      console.log(newvalue);
    });
    $scope.$watch('ciudadactual', function(newvalue, oldValue) {
      $scope.ciudad = $scope.ciudadactual.Id;
      console.log(newvalue);
    });

    $scope.$watch('centroofarm', function(newvalue, oldValue) {
      if (newvalue == 'farmacia') {
        $scope.accion_centroofarm = 'farmacia';
      } else if (newvalue == 'centromedico') {
        $scope.accion_centroofarm = '/centrosmedicos';
      }
    });


    $http.get('/jsonRemedios').then(fungetremediosexito, fungetremedioserror);

    function fungetremediosexito(data) {
      console.log(data.data);
      $scope.remedios = JSON.parse(data.data);
    }

    function fungetremedioserror(err) {
      console.log(err)
    }
    $http.get('/jsonEnfermedades').then(function(data) {
      console.log(data.data);
      $scope.enfermedades = JSON.parse(data.data);
    }, function(err) {
      console.log(err);
    })

    $http.get('/jsonComboDependiente').then(function(data) {
      console.log(data.data);
      $scope.combodep = JSON.parse(data.data);
    }, function(err) {
      console.log(err);
    })
	  $scope.regionactual = $scope.combodep[0];
    $scope.$watch('regionactual', function(value, oldValue){
       $scope.ciudadactual = value.Items[0];
    });
  }])
