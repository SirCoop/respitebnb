'use strict';

angular.module('respitebnbApp')
  .controller('NavbarCtrl', function ($scope, Auth, $state) {
    $scope.menu = [
      {
        'title': 'Host',
        'state': 'behost'
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

    $scope.logout = function () {
      Auth.logout();
      $state.go('app');
    };

  });
