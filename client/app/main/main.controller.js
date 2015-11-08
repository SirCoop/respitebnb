'use strict';
(function() {

function MainController($scope, $http, $state, socket, me) {
  var self = this;
  var location = {};

  self.me = me;
  location.person = self.me;

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  $scope.mobilePlatform = isMobile.any();

  $scope.agreeToUseLocation = function () {
      $scope.agreeToLocation = true;
      $state.reload();
  };

  //var usr = User.get();

  if (typeof self.me.location !== 'undefined') {
    $scope.locationUnavailable = false;
    $scope.agreeToLocation = true;
  }

  GMaps.geolocate({
    success: function(position){
      console.log('pos...: ', position);
      location.agree = true;
      location.latitude = position.coords.latitude;
      location.longitude = position.coords.longitude;
      // make api call to update user db info
      console.log('LOCATION: ', location);
      $http.post('/api/users/me/location', location).success(function (res) {
        console.log('success res: ', res);
        angular.element('a.disabled').removeClass('disabled');
      })
        .error(function (err) {
          console.log('error: ', err);
          //  test
        });
    },
    error: function(error){
      //  default user location to Stanford Graduate School of Business
      location.agree = true;
      location.latitude = 37.42817;
      location.longitude = -122.161492;
      // make api call to update user db info
      $http.post('/api/users/me/location', location).success(function (res) {
        console.log('success res: ', res);
        angular.element('a.disabled').removeClass('disabled');
      })
        .error(function (err) {
          console.log('error: ', err);
        });
      $scope.locationUnavailable = true;
      console.log('error: ', error);
      //alert('Geolocation failed: '+ error.message);
    },
    not_supported: function(){
      $scope.locationUnavailable = true;
      //alert('Your browser does not support geolocation');
    }
  });

  //this.awesomeThings = [];
  //
  //$http.get('/api/things').then(function(response) {
  //  self.awesomeThings = response.data;
  //  socket.syncUpdates('thing', self.awesomeThings);
  //});
  //
  //this.addThing = function() {
  //  if (self.newThing === '') {
  //    return;
  //  }
  //  $http.post('/api/things', { name: self.newThing });
  //  self.newThing = '';
  //};
  //
  //this.deleteThing = function(thing) {
  //  $http.delete('/api/things/' + thing._id);
  //};

  $scope.$on('$destroy', function() {
    socket.unsyncUpdates('thing');
  });



}

angular.module('respitebnbApp')
  .controller('MainController', MainController);

})();
