/**
 * Created by Sir_Coop on 11/2/2015.
 */
'use strict';
(function() {

  function UserController($scope, $http, socket, User, Auth, Location) {
    var self = this, myLocation;
    //this.awesomeThings = [];

    self.me = User.get();
    self.myLocation;

    self.map = {
      center: {
        latitude: 35.2290372,
        longitude: -80.842444
      },
      zoom: 8
    };

    self.myMarker = {
      coords: self.map.center,
      idKey: 1
    }

    self.availableHostMarkers = [
      {
        id: 2,
        latitude: 35.3290372,
        longitude: -80.942444,
        name: 'Zack F.',
        address: {
          street: '23 Jordan Rd',
          city: 'Chapel Hill',
          state: 'NC'
        },
        distance: 186
      },
      {
        id: 3,
        latitude: 35.250372,
        longitude: -80.852444,
        name: 'Brett H.',
        address: {
          street: '10 Hippie Ln',
          city: 'Asheville',
          state: 'NC'
        },
        distance: 134
      },
      {
        id: 4,
        latitude: 35.60372,
        longitude: -80.442444,
        name: 'Gary C.',
        address: {
          street: '1 Infinite Loop',
          city: 'Coopertino',
          state: 'CA'
        },
        distance: 13
      },
      {
        id: 5,
        latitude: 35.6290372,
        longitude: -80.782444,
        name: 'Susan F.',
        address: {
          street: '131 Buck Fraley Rd',
          city: 'Cherryville',
          state: 'NC'
        },
        distance: 24
      }
    ];

    if (navigator.geolocation) {
      myLocation = Location.getMyLocation();

    } else {
      $scope.noLocationAvailable = true;
    }

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
    .controller('UserController', UserController);

})();
