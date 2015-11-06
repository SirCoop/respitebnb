'use strict';

angular.module('respitebnbApp')
  .controller('NavbarCtrl', function ($scope, Auth, $state) {
    $scope.menu = [
      {
        'title': 'Host',
        'state': 'behost'
      },
      {
        'title': 'Find Host',
        'state': 'findHost'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    //  fetch user model
    $scope.getCurrentUser = Auth.getCurrentUser();
    console.log('navbar user: ', $scope.getCurrentUser);

    $scope.logout = function () {
      Auth.logout();
      $state.go('app');
    };



  });
