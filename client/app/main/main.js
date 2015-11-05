'use strict';

angular.module('respitebnbApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          me: function (User) {
            return User.get().$promise;
          }

          //myResource: 'User',
          //me: function (myResource) {
          //  return myResource.get();
          //}
        }
      })
      .state('findHost', {
        url: '/findHost',
        templateUrl: 'app/host/findHost.html',
        controller: 'FindHostController',
        controllerAs: 'fhost',
        resolve: {
          me: function (User) {
            return User.get().$promise;
          }


          //myResource: 'User',
          //me: function (myResource) {
          //  return myResource.get();
          //}

        //  myPosition: function (Location) {
        //    return Location.getMyPosition();
        //  }
        //  me: function (User) {
        //    var me = User.get();
        //    return me;
        //  }
        }
      });
  });
