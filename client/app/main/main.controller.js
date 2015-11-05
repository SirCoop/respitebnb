'use strict';
(function() {

function MainController($scope, $http, socket, me) {
  var self = this;

  self.me = me;
  console.log('ME main ctrl: ', self.me);
  //var usr = User.get();

  if (self.me.location) {
    $scope.locationUnavailable = false;
  }

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

  //  get user location, add to db for user
  //(function () {
  //  if (!!navigator.geolocation) {
  //    navigator.geolocation.getCurrentPosition(function (position) {
  //      // set up user location obj
  //      var location = {};
  //      location.person = usr;
  //      location.latitude = position.coords.latitude;
  //      location.longitude = position.coords.longitude;
  //      // make api call to update user db info
  //      $http.post('/api/users/me/location', location);
  //
  //    }, function () {
  //      // if err retrieving location
  //      $scope.locationUnavailable = true;
  //    })
  //  } else {
  //    //  location not available in browser
  //    $scope.locationUnavailable = true;
  //  }
  //})()

$scope.testApi = function () {
  $scope.agreeToLocation = true;
  if (!!navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      // set up user location obj
      var location = {};
      location.agree = true;
      location.person = self.me;
      location.latitude = position.coords.latitude;
      location.longitude = position.coords.longitude;
      // make api call to update user db info
      $http.post('/api/users/me/location', location).success(function (res) {
        console.log('success res: ', res);
        angular.element('a.disabled').removeClass('disabled');
      })
      .error(function (err) {
          console.log('error: ', err);
      });
    }, function () {
      // if err retrieving location
      $scope.locationUnavailable = true;
    });
  } else {
    //  location not available in browser
    $scope.locationUnavailable = true;
  }

};

}

angular.module('respitebnbApp')
  .controller('MainController', MainController);

})();
