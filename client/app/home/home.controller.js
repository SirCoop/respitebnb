'use strict';

angular.module('respitebnbApp')
  .controller('HomeController', function ($scope) {
    $scope.message = 'Hello';
    console.log('scope home: ',  $scope);

  });
