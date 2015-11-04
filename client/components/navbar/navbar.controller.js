'use strict';

angular.module('respitebnbApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [
      {
        'title': 'Host',
        'state': 'bhost'
      },
      {
        'title': 'find Host',
        'state': 'findHost'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
