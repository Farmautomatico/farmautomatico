var app=angular.module("app",['ngAnimate', 'mgcrea.ngStrap']);

angular.module('app')
.controller('indexController',  ['$scope','$templateCache', '$http', '$location', '$window', function($scope, $templateCache, $http, $location, $window){
  $scope.remediosel = '';
  $scope.remedios = ['Omeprazol', 'Loratadina'];
  $scope.enviarRemedio = function() {
    console.log($scope.remediosel);
    $http({
      method: 'POST',
      url: '/',
      data: {remedioselec: $scope.remediosel, submit: "Al remedio"},
      headers: {'Content-Type': 'application/json'}
    })
    .then(
      function(succ) {
        console.log(succ);
        var landingUrl = "http://" + $window.location.host + "/login";
        $window.location.href = landingUrl;
    }, function(err)    {console.log(err)})
  }
}]);
