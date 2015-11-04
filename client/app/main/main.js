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
      .state('findHost', {
        url: '/findHost',
        templateUrl: 'app/host/findHost.html',
        controller: 'FindHostController',
        controllerAs: 'fhost',
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
