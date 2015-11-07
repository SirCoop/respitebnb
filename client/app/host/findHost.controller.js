/**
 * Created by Sir_Coop on 11/2/2015.
 */
'use strict';
(function() {

  function FindHostController($scope, $http, $q, socket, User, Auth, me) {
    var self = this;
    //  me is the modified mongo version of User.get()
    //  needed to resolve me prior to loading this ctrl

    //  as of now, manually update respitebnb-dev host to add location
    //  need to make location a db field upon registration
    /*  db.users.update(
          {name: "Gary Michael Cooper"
          },
          {$set:
            {location:
              {latitude: 35.2291198, longitude: -80.8423344}
            }
          }
        )
    */

    //self.me = User.get();
    self.me = me;
    console.log('ME fHost ',self.me);

    GMaps.geolocate({
      success: function(position){
        map.setCenter(position.coords.latitude, position.coords.longitude);
        map.addMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: '210 N. Church St.',
          infoWindow: {
            content: 'Me'
          },
          icon: '.././assets/images/google-maps-blue-marker.png'
        });
      },
      error: function(error){
        //alert('Geolocation failed: '+ error.message);
        map.setCenter(37.42817, -122.161492);
        map.addMarker({
          lat: 37.42817,
          lng: -122.161492,
          title: 'Stanford',
          infoWindow: {
            content: 'You are here!'
          }
        });
      },
      not_supported: function(){
        alert("Your browser does not support geolocation");
      }
    });

    //self.map = {
    //  center: {
    //    //  defaults to stanford graduate school of business
    //    latitude: self.me.location.latitude || 37.42817,
    //    longitude: self.me.location.longitude || -122.161492
    //  },
    //  zoom: 8
    //};
    //
    //self.myMarker = {
    //  coords: self.map.center,
    //  idKey: 1,
    //  options: {
    //    //icon:'//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    //    icon:'.././assets/images/google-maps-blue-marker.png'
    //  },
    //};
    //
    //self.availableHostMarkers = [
    //  //  Charlotte Area
    //  {
    //    id: 2,
    //    latitude: 35.3290372,
    //    longitude: -80.942444,
    //    name: 'Zack F.',
    //    address: {
    //      street: '23 Jordan Rd',
    //      city: 'Chapel Hill',
    //      state: 'NC'
    //    },
    //    distance: 186
    //  },
    //  {
    //    id: 3,
    //    latitude: 35.250372,
    //    longitude: -80.852444,
    //    name: 'Brett H.',
    //    address: {
    //      street: '10 Hippie Ln',
    //      city: 'Asheville',
    //      state: 'NC'
    //    },
    //    distance: 134
    //  },
    //  {
    //    id: 4,
    //    latitude: 35.60372,
    //    longitude: -80.442444,
    //    name: 'Gary C.',
    //    address: {
    //      street: '1 Infinite Loop',
    //      city: 'Coopertino',
    //      state: 'CA'
    //    },
    //    distance: 13
    //  },
    //  {
    //    id: 5,
    //    latitude: 35.6290372,
    //    longitude: -80.782444,
    //    name: 'Susan F.',
    //    address: {
    //      street: '131 Buck Fraley Rd',
    //      city: 'Cherryville',
    //      state: 'NC'
    //    },
    //    distance: 24
    //  },
    //  //  RTP Area
    //  {
    //    id: 6,
    //    latitude: 35.925921,
    //    longitude: -79.039466,
    //    name: 'Michael J.',
    //    address: {
    //      street: '23 Jordan Rd',
    //      city: 'Chapel Hill',
    //      state: 'NC'
    //    },
    //    distance: 186
    //  },
    //  {
    //    id: 7,
    //    latitude: 35.988644,
    //    longitude: -78.907167,
    //    name: 'Mike K.',
    //    address: {
    //      street: '10 Hippie Ln',
    //      city: 'Durham',
    //      state: 'NC'
    //    },
    //    distance: 134
    //  },
    //  {
    //    id: 8,
    //    latitude: 35.818835,
    //    longitude: -78.644590,
    //    name: 'Pat M.',
    //    address: {
    //      street: '1 Infinite Loop',
    //      city: 'Raleigh',
    //      state: 'CA'
    //    },
    //    distance: 13
    //  },
    //  {
    //    id: 9,
    //    latitude: 35.995921,
    //    longitude: -79.139466,
    //    name: 'Julius P.',
    //    address: {
    //      street: '131 Buck Fraley Rd',
    //      city: 'Somewhere',
    //      state: 'NC'
    //    },
    //    distance: 24
    //  }
    //];

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

    map.addMarkers([
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
    ]);






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
