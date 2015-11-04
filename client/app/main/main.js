'use strict';

angular.module('respitebnbApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'user',
        resolve: {
        //  myPosition: function (Location) {
        //    return Location.getMyPosition();
        //  }
          me: function (User) {
            return User.get();
          }
        }
      });
  });
