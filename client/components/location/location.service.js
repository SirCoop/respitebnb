'use strict';

angular.module('respitebnbApp')
  .factory('Location', function () {
    // Service logic
    // ...

    function writePos () {
      var myPos = {};
      navigator.geolocation.getCurrentPosition(function(position) {
        myPos.latitude = position.coords.latitude;
        myPos.longitude = position.coords.longitude;
        console.log('values: ', myPos);
        return myPos;
      })
    }



    //if(!!navigator.geolocation) {
    //  navigator.geolocation.getCurrentPosition(function(position) {
    //    myPos.latitude = position.coords.latitude;
    //    myPos.longitude = position.coords.longitude;
    //  });
    //} else {
    //  return 'Cannot acquire location.';
    //}



    // Public API here
    return {
      getMyPosition: writePos

    };
  });
