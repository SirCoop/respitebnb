'use strict';

angular.module('respitebnbApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.menu = [
      {
        'title': 'Home',
        'state': 'main'
      },
      {
        'title': 'User Home',
        'state': 'user'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
