'use strict';

angular.module('respitebnbApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarCtrl'
      //link: function (scope, element, attrs) {
      //  console.log('scope', scope);
      //  console.log('element', element);
      //  console.log('attrs', attrs);
      //  var x = element.children().find('.checkLock');
      //  console.log('Select results ', x);
      //  if (scope.getCurrentUser().location === 'undefined') {
      //    element.children('li>a').addClass('disabled');
      //  }
      //}
    };
  });
