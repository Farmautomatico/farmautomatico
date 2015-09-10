var app = angular.module("app", ['ngAnimate', 'mgcrea.ngStrap']);

angular.module('app')
  .controller('indexController', ['$scope', '$templateCache', '$http', '$location', '$window', function($scope, $templateCache, $http, $location, $window) {
      $scope.remedios = ['hola'];
      $scope.remediosel = '';
      $http.get('/jsonRemedios').then(fungetexito, funerror);

      function fungetexito(data) {
        console.log(data.data);
        $scope.remedios = JSON.parse(data.data);

        console.log($scope.remedios);


        //$scope.remedios = ['Omeprazol', 'Loratadina'];
        $scope.enviarRemedio = function() {
          console.log($scope.remediosel);
          $http({
              method: 'POST',
              url: '/',
              data: {
                remedioselec: $scope.remediosel,
                submit: "Al remedio",
                seleccionCiudad: $scope.ciudad
              },
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(
              function(succ) {
                console.log(succ);
                var landingUrl = "http://" + $window.location.host + "/remedio";
                $window.location.href = landingUrl;
              }
            )}
        }

        function funerror(err) {
          console.log(err)
        }

    $scope.controllerCMOFarm = function() {
      $http({
          method: 'POST',
          url: '/',
          data: {
            centroofarm: $scope.centroofarm,
            submit: "A mi Centro Medico o Farmacia"
          },
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(
          function(succ) {
            console.log(succ);
            if ($scope.centroofarm == 'farmacia') {
              var landingUrl = "http://" + $window.location.host + "/farmacia";
            } else if ($scope.centroofarm == 'centromedico') {
              var landingUrl = "http://" + $window.location.host + "/centrosmedicos";
            }
            $window.location.href = landingUrl;
          },
          function(err) {
            console.log(err)
          })
    }

    $scope.controllerEspecialista = function() {
      var landingUrl = "http://" + $window.location.host + "/especialista";
      $window.location.href = landingUrl;
    }
  }])
