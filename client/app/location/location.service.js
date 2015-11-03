'use strict';

angular.module('respitebnbApp')
  .factory('Location', function () {
    // Service logic

    var myPosition = {};

    // Public API here
    return {
      getMyLocation: function () {
        console.log('getMyLocation');
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log('position: ', position);
          myPosition.ccords = position.coords;
          myPosition.timestamp = position.timestamp;
          return myPosition;
        });
      }
    };
  });
