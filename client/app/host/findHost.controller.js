/**
 * Created by Sir_Coop on 11/2/2015.
 */
'use strict';
(function() {

  function FindHostController($scope, $http, $q, socket, User, Auth, me) {
    var self = this;
    self.me = me;
    console.log('ME fHost ',self.me);

    var hosts = [
      //  Charlotte Area
      {
        lat: 35.3290372,
        lng: -80.942444,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      },
      {
        lat: 35.250372,
        lng: -80.852444,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      },
      {
        lat: 35.60372,
        lng: -80.442444,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      },
      {
        lat: 35.6290372,
        lng: -80.782444,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      },
      //  RTP Area
      {
        lat: 35.925921,
        lng: -79.039466,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      },
      {
        lat: 35.988644,
        lng: -78.907167,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      },
      {
        lat: 35.818835,
        lng: -78.644590,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      },
      {
        lat: 35.995921,
        lng: -79.139466,
        title: 'Big Ben',
        infoWindow: {
          content: 'Me'
        }
      }
    ];

    self.availableHostMarkers = hosts.length;

    var map = new GMaps({
      el: '#map',
      lat: self.me.location.latitude,
      lng: self.me.location.longitude,
      zoom: 12,
      zoomControl : true,
      zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl : false,
      click: function(e){
        console.log('click: ', e);
      },
      dragend: function(e){
        console.log('drag: ', e);
      }
    });

    map.addMarker({
      lat: self.me.location.latitude,
      lng: self.me.location.longitude,
      title: 'London Eye',
      infoWindow: {
        content: 'big ben'
      },
      icon:'.././assets/images/google-maps-blue-marker.png'
    });

    map.addMarkers(hosts);






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
    .controller('FindHostController', FindHostController);

})();
