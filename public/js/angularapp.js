var app = angular.module("app", ['ngAnimate', 'mgcrea.ngStrap']);

angular.module('app')
  .controller('indexController', ['$scope', '$templateCache', '$http', '$location', '$window', function($scope, $templateCache, $http, $location, $window) {
      $scope.remedios = ['falló'];
      $scope.remediosel = '';
      $http.get('/jsonRemedios').then(fungetexito, funerror);

      function fungetexito(data) {
        console.log(data.data);
        $scope.remedios = JSON.parse(data.data);
}
function funerror(err) {
  console.log(err)
}
  }])
